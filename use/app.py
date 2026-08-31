import asyncio
import io
import os
from pathlib import Path

from edge_tts import Communicate
from flask import Flask, Response, jsonify, send_from_directory, request as flask_request

ROOT_DIR = Path(__file__).resolve().parent.parent
app = Flask(__name__)

EDGE_TTS_VOICE = os.getenv("EDGE_TTS_VOZ", "es-MX-DaliaNeural")
EDGE_TTS_RATE = os.getenv("EDGE_TTS_RATE", "+10%")
TTS_CACHE = {}


@app.after_request
def agregar_cors(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    return response


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"ok": True, "status": "tts-backend"})


@app.route("/tts", methods=["POST", "OPTIONS"])
def generar_tts():
    if flask_request.method == "OPTIONS":
        return Response(status=200)

    datos = flask_request.get_json(silent=True) or {}
    texto = (datos.get("text") or "").strip()

    if not texto:
        return jsonify({"error": "No se recibió texto para sintetizar."}), 400

    cached = TTS_CACHE.get(texto)
    if cached is not None:
        return Response(
            cached,
            mimetype="audio/mpeg",
            headers={
                "Cache-Control": "public, max-age=3600",
                "Content-Disposition": "inline; filename=paso.mp3",
            },
        )

    async def generar_audio_edge():
        buffer = io.BytesIO()
        communicate = Communicate(texto, EDGE_TTS_VOICE, rate=EDGE_TTS_RATE)
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                buffer.write(chunk["data"])
        return buffer.getvalue()

    try:
        mp3_bytes = asyncio.run(generar_audio_edge())
    except Exception as exc:  # pragma: no cover
        return jsonify({"error": f"No se pudo generar audio con Edge TTS: {exc}"}), 502

    if not mp3_bytes:
        return jsonify({"error": "Edge TTS no devolvió audio."}), 502

    TTS_CACHE[texto] = mp3_bytes
    return Response(
        mp3_bytes,
        mimetype="audio/mpeg",
        headers={
            "Cache-Control": "public, max-age=3600",
            "Content-Disposition": "inline; filename=paso.mp3",
        },
    )


@app.route("/")
def index():
    return send_from_directory(ROOT_DIR, "index.html")


@app.route("/manual.js")
def manual_js():
    return send_from_directory(ROOT_DIR, "manual.js")


@app.route("/estilos.css")
def estilos_css():
    return send_from_directory(ROOT_DIR, "estilos.css")


@app.route("/img/<path:nombre_archivo>")
def servir_imagen(nombre_archivo):
    imagen_dir = ROOT_DIR / "img"
    if not imagen_dir.exists():
        return jsonify({"error": "La carpeta img/ no existe en el proyecto."}), 404
    return send_from_directory(imagen_dir, nombre_archivo)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "5000")), debug=False)