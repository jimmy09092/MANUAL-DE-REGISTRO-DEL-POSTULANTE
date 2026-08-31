const pasos = [
  {
    titulo: "Ingreso a la plataforma",
    descCorta: "Accede al portal oficial <b>https://postulantes.liderman.org/login</b> y presiona el botón de registro para comenzar.",
    texto: "Ingresa a https://postulantes.liderman.org/login, donde se mostrará la pantalla de bienvenida. En esta pantalla debes presionar el botón Regístrate para crear tu usuario.",
    img: ["img/paso1.png"]
  },
  {
    titulo: "Registro de datos básicos",
    descCorta: "Ingresa tus datos de identificación principales con atención al detalle:<ul class=\"lista-paso-desc\"><li><b>Datos requeridos:</b> Nombre completo, apellidos, correo electrónico personal, teléfono, tipo y número de documento de identidad.</li></ul><b>Nota:</b> Esta información no se podrá modificar una vez enviada.",
    texto: "Se solicitarán tus datos personales básicos: nombres, apellidos, correo electrónico, teléfono, tipo y número de documento. Recuerda que, una vez llenado, este formulario no se puede corregir, así que verifica bien tu información antes de continuar.",
    img: ["img/paso2.png"]
  },
  {
    titulo: "Validación por correo",
    descCorta: "Verifica tu cuenta ingresando el código de confirmación enviado a tu correo electrónico.<br><b>Sugerencia:</b> Revisa la bandeja de spam o correo no deseado si no lo encuentras en la bandeja de entrada.",
    texto: "Llegará un código de 6 dígitos al correo que registraste. Ingresa ese código en la plataforma para habilitar el formulario y comenzar a completar tu información.",
    img: ["img/paso3.png"]
  },
  {
    titulo: "Ficha de datos personales",
    descCorta: "Registra la información completa sobre tu perfil, residencia y núcleo familiar:<ul class=\"lista-paso-desc\"><li><b>Datos personales:</b> Nombres, apellidos, correo, teléfono, género, DNI, estado civil, edad, fecha de nacimiento y brevete (si aplica).</li><li><b>Domicilio:</b> Dirección completa, departamento, provincia, distrito y referencia.</li><li><b>Datos familiares:</b> Datos generales y contacto de cónyuge/conviviente, hijos y padres.</li></ul>",
    texto: "Completa tus datos personales, dirección de domicilio y datos de tus familiares directos (cónyuge/conviviente, hijos y padres). Verifica que todos los campos obligatorios estén llenos.",
    img: ["img/paso4.gif"]
  },
  {
    titulo: "Firma digital",
    descCorta: "Dibuja tu firma en el recuadro interactivo. Puedes borrarla y volver a intentarlo cuantas veces lo requieras.<br><b>Importante:</b> Debe coincidir con la firma de tu documento de identidad.",
    texto: "Al finalizar esta primera hoja, dibuja tu firma usando el mouse o el dedo si usas un dispositivo táctil, y presiona Siguiente. Si algún campo obligatorio falta, se marcará en rojo y no podrás avanzar hasta completarlo.",
    img: ["img/paso5.png"]
  },
  {
    titulo: "Boletín e Información Previsional",
    descCorta: "Revisa la información institucional y selecciona tu sistema de pensiones. Esto te permitirá conocer tus obligaciones laborales, beneficios y aspectos relevantes para tus actividades.",
    texto: "Lee atentamente el boletín informativo institucional y luego selecciona el sistema de pensiones al que perteneces (AFP u ONP) antes de continuar con el proceso.",
    img: ["img/paso6.gif"]
  },
  {
    titulo: "Cláusula de consentimiento",
    descCorta: "Acepta los términos sobre confidencialidad y protección de datos. En Liderman nos comprometemos a proteger tu información y te brindamos las consideraciones sobre tu privacidad.",
    texto: "Aquí explicamos la confidencialidad y protección de datos personales que nos estás brindando.",
    img: ["img/paso8.png"]
  },
  {
    titulo: "Elección de jornada de trabajo",
    descCorta: "Selecciona el turno laboral (8 o 12 horas) acordado previamente con tu reclutador, sujeto a la disponibilidad de las vacantes.",
    texto: "Marca si trabajarás en jornada de 8 o 12 horas, de acuerdo a lo previamente conversado con tu reclutador.",
    img: ["img/paso9.png"]
  },
  {
    titulo: "Visita domiciliaria",
    descCorta: "Responde los cuestionarios solicitados.<br>Debes detallar tu información personal y familiar/convivientes, así como aspectos de tu domicilio (evaluación de potenciales vulnerabilidades del sector).",
    texto: "Completa los campos de opción múltiple de esta sección. Estos también son obligatorios para poder continuar con el registro.",
    img: ["img/paso10.gif"]
  },
  {
  titulo: "Autorizaciones, Convenios y Declaración Jurada",
  descCorta: `<ul class="lista-paso-desc">
      <li><strong>Tratamiento de datos personales:</strong> Autorización para el uso de imagen y voz con fines corporativos.</li>
      <li><strong>Cargo de entrega de documentos laborales:</strong> Conformidad de documentos recibidos al ingreso.</li>
      <li><strong>Convenio de descuento:</strong> Por permanencia mínima a partir de 12 meses de participación en la empresa, en donde se podrían tener beneficios especiales.</li>
      <li><strong>Declaraciones generales:</strong> Conformidad sobre políticas de sustancias psicoactivas, SST, evaluación poligráfica y antecedentes.</li>
    </ul>`,
  texto: "Acepta la autorización de uso de imagen y voz, revisa la entrega de cargos y documentos, confirma los convenios de descuento y finaliza aceptando las declaraciones juradas correspondientes.",
  img: ["img/autoGif.gif"]
},
  {
  titulo: "Condiciones laborales",
  descCorta: `<ul class="lista-paso-desc">
        <li><strong>Condiciones laborales:</strong> Estructura salarial firmada proporcionada por tu reclutador, en esta únicamente se deben agregar los datos faltantes, esta mayoritariamente llena por el reclutador.</li>
	      <br> <b>Nota:</b> No descargues formularios externos o intentes crear uno manualmente, debe ser propiamente el otorgado por tu reclutador.`,
	texto: "La ficha de condiciones laborales debe ser emitida por tu reclutador, ponte en contacto con el/ella y rellene los datos faltantes.",
	img: ["img/paso21_1.png"]
  },
  //ACTUALIZANDO
      {
    titulo: "Compromiso de Activos, informes y descuentos",
    descCorta: `<ul class="lista-paso-desc">
      <li><strong>Conflicto de intereses:</strong> Declaración de vínculos familiares o conocidos en la empresa para garantizar transparencia, siendo el caso de detallarlo si existe vinculo.</li>
      <li><strong>Gestión de activos:</strong> Conformidad de haber sido instruido en el manejo de equipos de la empresa y compromiso para el cuidado de activos.</li>
      <li><strong>Informe medico:</strong> Se declara constancia de que se realizo el proceso de informe medico y entrega de resultados de informe medico ocupacional</li>
      <li><strong>Capacitación de app:</strong> Se declara que se ha sido capacitado correctamente en el uso de la <b>app liderman</b></li>
      <li><strong>Protección de bienes:</strong> Cobertura responsable frente a pérdida, daño o uso negligente de los activos.</li>
      </ul>`,
    texto: "Acepta la declaración de conflicto de intereses, confirma la recepción de tu informe médico ocupacional y la capacitación de la app, y revisa los compromisos de cuidado y protección de activos asignados para continuar con el proceso.",
    img: ["img/descGif.gif"]
  },
  {
    titulo: "Subir Currículum Vitae",
    descCorta: "Adjunta tu CV actualizado (de preferencia en formato PDF). Contarás con un botón para buscar el archivo localmente en tu celular o computadora.",
    texto: "Sube tu Curriculum Vitae, de preferencia en formato PDF, para una óptima lectura de tu información.",
    img: ["img/paso14_1.gif"]
  },
  {
    titulo: "Subir DNI",
    descCorta: "Carga imágenes nítidas de ambas caras de tu documento de identidad. Asegúrate de que los datos sean legibles y no tengan reflejos ni elementos que los cubran.",
    texto: "Sube una foto de ambas caras de tu documento de identidad y completa la información solicitada: fecha de vencimiento, fecha de emisión y ubigeo.",
    img: ["img/paso15_1.png", "img/paso15_2.png"]
  },
  {
    titulo: "Certificado Único Laboral",
    descCorta: "Adjunta tu CUL (tramitado gratis en <b>https://www.empleosperu.gob.pe</b>).<br><b>Nota:</b> En caso de figurar con observaciones en algún antecedente, presiona el botón 'Tengo observaciones' para continuar.",
    texto: "Sube tu certificado único laboral, tramitado sin costo en la página del Ministerio de Trabajo. Se usará para validar tus antecedentes. Si sales observado en alguno, puedes presentar tus antecedentes de forma individual usando el botón 'Tengo observaciones'.",
    img: ["img/paso16_1.png", "img/paso16_2.png"]
  },
  {
    titulo: "Certificado de estudios",
    descCorta: "Adjunta tus constancias de estudios (básicos, técnicos o superiores). En caso contrario, deberás presentar una declaración jurada notarial para su validez.",
    texto: "Sube tu certificado de estudios básicos o superiores. Si no cuentas con ninguno, deberás formalizar una declaración jurada de estudios ante un notario para que sea válida.",
    img: ["img/paso17_1.png", "img/paso17_2.png"]
  },
  {
    titulo: "Certificados de trabajo",
    descCorta: "Adjunta los certificados que sustenten tu experiencia laboral previa. En caso de no poseerlos, podrás reemplazarlos por una declaración jurada simple.",
    texto: "Adjunta tus certificados de trabajos anteriores. Si no cuentas con alguno, puede reemplazarse por una declaración jurada de trabajo simple.",
    img: ["img/paso18_1.png"]
  },
  {
    titulo: "Croquis y foto de domicilio",
    descCorta: "Sube el plano de ubicación de tu domicilio (hecho a mano o mediante herramientas de GPS como Google Maps) y una fotografía actual de la fachada (se admite captura de Google Street View si representa el estado actual de la vivienda).",
    texto: "Sube el croquis de tu domicilio, que puedes obtener de Google Maps, y una foto actual de la fachada de tu casa tal como se ve al momento de completar tu registro.",
    img: ["img/paso19_1.png", "img/paso19_2.png"]
  },
  {
    titulo: "Asignación familiar",
    descCorta: "Aplica si tienes hijos menores de 18 años o hijos de 18 a 24 años en etapa escolar/superior. Si no aplica a tu situación, omite este paso.",
    texto: "Si tienes hijos menores de edad, sube también sus documentos de identidad para el registro del beneficio.",
    img: ["img/paso20_1.png", "img/paso20_2.png"]
  },
  {
    titulo: "DJ de huellas dactilares",
    descCorta: `<ul class="lista-paso-desc">
        <li><strong>DJ de huellas dactilares:</strong> Formato descargable para registrar tu firma y huella.</li>
      </ul>
      <b>Opciones para completar el formato:</b>
      <ul class="lista-paso-desc">
        <li>Imprimir, llenar a mano, escanear y adjuntar.</li>
        <li>Completar digitalmente en formato PDF con firma y huella en alta resolución.</li>
      </ul>
      <b>Nota:</b> Recuerda que tanto la firma como la huella dactilar deben ser legibles y sin errores de resolución.`,
    texto: "Descarga la declaración jurada de autenticidad dactilar, imprímela, complétala a mano con tu firma y huella dactilar, y súbela a la plataforma. Con esto tu registro quedará finalizado y será revisado por el área de gestión documental.",
    img: ["img/paso21_2.png"]
  }
];

let indice = 0;
let hablando = false;
let cargandoAudio = false;
let volumen = 1;
let navegacionBloqueada = false;

// ============================================================
// CONFIGURACIÓN DEL BACKEND TTS
// El navegador no debe conocer la API key ni generar archivos locales.
// El servidor recibe el texto y devuelve el audio en memoria.
// ============================================================
const TTS_ENDPOINT = "/tts";

let audioActual = null;        // objeto Audio que se está reproduciendo
const cacheAudio = {};         // guarda la URL del audio ya generada por índice de paso

async function obtenerAudioDesdeBackend(texto) {
  const respuesta = await fetch(TTS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: texto })
  });

  if (!respuesta.ok) {
    const detalle = await respuesta.text();
    throw new Error(`TTS del servidor falló (${respuesta.status}): ${detalle}`);
  }

  const blob = await respuesta.blob();
  return URL.createObjectURL(blob);
}

function iniciarManual(){
  document.getElementById("portada").style.display = "none";
  document.getElementById("cierre").style.display = "none";
  document.getElementById("carrusel").classList.add("activo");
  indice = 0;
  renderPaso();
}

function manejarBotonPlay(){
  const portadaVisible = document.getElementById("portada").style.display !== "none";
  if (portadaVisible) {
    iniciarManual();
  } else {
    toggleNarracion();
  }
}

function renderPaso(){
  const p = pasos[indice];

  const pasoGrid = document.getElementById("pasoGrid");
  if (indice < 10 && indice % 2 !== 0) {
    pasoGrid.classList.add("inverso");
  } else {
    pasoGrid.classList.remove("inverso");
  }

  document.getElementById("pasoTitulo").textContent = p.titulo;
  document.getElementById("pasoDescCorta").innerHTML = p.descCorta;

  const numFormateado = String(indice + 1).padStart(2, '0');
  document.getElementById("textoPasoHeader").innerHTML = `PASO ${numFormateado} / ${pasos.length}`;

  const container = document.getElementById("pasoMediaContainer");
  container.innerHTML = "";
  container.classList.toggle("pasos-iniciales", indice < 11);

  if (p.img.length > 1) {
    container.classList.add("doble-imagen");
  } else {
    container.classList.remove("doble-imagen");
  }

  p.img.forEach(archivo => {
    const ext = archivo.toLowerCase().split('.').pop();

    if (ext === "mp4") {
      const videoHTML = `
        <video class="media-paso" autoplay loop muted playsinline controls>
          <source src="${archivo}" type="video/mp4">
        </video>`;
      container.insertAdjacentHTML('beforeend', videoHTML);
      const videoElement = container.querySelector('video');
      if (videoElement) {
        videoElement.load();
        videoElement.play().catch(() => {});
      }
    } else {
      const imgHTML = `<img src="${archivo}" alt="Captura del paso" class="media-paso">`;
      container.insertAdjacentHTML('beforeend', imgHTML);
    }
  });

  const porcentaje = ((indice + 1) / pasos.length) * 100;
  document.getElementById("barraProgreso").style.width = porcentaje + "%";

  renderDots();
  detenerNarracion();
}

function renderDots(){
  const dots = document.getElementById("dots");
  dots.innerHTML = "";
  pasos.forEach((_,i)=>{
    const d = document.createElement("span");
    if(i === indice) d.classList.add("activo");
    d.onclick = ()=>{ indice = i; renderPaso(); };
    dots.appendChild(d);
  });
}

function abrirVisorImagen(imagen){
  const visor = document.getElementById("visorImagen");
  const imagenAmpliada = document.getElementById("imagenAmpliada");

  imagenAmpliada.src = imagen.src;
  imagenAmpliada.alt = imagen.alt;
  visor.classList.add("abierto");
  visor.setAttribute("aria-hidden", "false");
}

function cerrarVisorImagen(){
  const visor = document.getElementById("visorImagen");
  const imagenAmpliada = document.getElementById("imagenAmpliada");

  visor.classList.remove("abierto");
  visor.setAttribute("aria-hidden", "true");
  imagenAmpliada.src = "";
}

function configurarVisorImagen(){
  const container = document.getElementById("pasoMediaContainer");
  const visor = document.getElementById("visorImagen");
  const cerrarVisor = document.getElementById("cerrarVisor");

  container.addEventListener("click", evento => {
    if (evento.target.matches("img.media-paso")) {
      abrirVisorImagen(evento.target);
    }
  });

  cerrarVisor.addEventListener("click", cerrarVisorImagen);
  visor.addEventListener("click", evento => {
    if (evento.target === visor) {
      cerrarVisorImagen();
    }
  });

  document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
      cerrarVisorImagen();
    }
  });
}

function pasoSiguiente(){
  if (navegacionBloqueada) return;
  navegacionBloqueada = true;

  const portadaVisible = document.getElementById("portada").style.display !== "none";
  if (portadaVisible) {
    iniciarManual();
    liberarNavegacion();
    return;
  }

  if(indice < pasos.length - 1){
    indice++;
    renderPaso();
  } else {
    mostrarPantallaCierre();
  }

  liberarNavegacion();
}

function pasoAnterior(){
  if (navegacionBloqueada) return;
  navegacionBloqueada = true;

  if (document.getElementById("cierre").style.display === "block") {
    document.getElementById("cierre").style.display = "none";
    document.getElementById("carrusel").classList.add("activo");
    renderPaso();
    liberarNavegacion();
    return;
  }
  if(indice > 0){
    indice--;
    renderPaso();
  }

  liberarNavegacion();
}

function liberarNavegacion(){
  window.setTimeout(() => {
    navegacionBloqueada = false;
  }, 180);
}

function mostrarPantallaCierre(){
  document.getElementById("carrusel").classList.remove("activo");
  document.getElementById("cierre").style.display = "block";
  document.getElementById("textoPasoHeader").textContent = "FINALIZADO";
  document.getElementById("barraProgreso").style.width = "100%";
  detenerNarracion();
}

function irAlInicio(){
  document.getElementById("portada").style.display = "block";
  document.getElementById("cierre").style.display = "none";
  document.getElementById("carrusel").classList.remove("activo");
  document.getElementById("textoPasoHeader").textContent = "INTRO";
  document.getElementById("barraProgreso").style.width = "0%";
  detenerNarracion();
}

async function reproducirNarracion(){
  const btnPlay = document.getElementById("btnPlay");
  const pasoIndice = indice;
  const texto = pasos[pasoIndice].texto;

  try {
    let src = cacheAudio[pasoIndice];

    if (!src) {
      cargandoAudio = true;
      btnPlay.textContent = "…";
      src = await obtenerAudioDesdeBackend(texto);
      cacheAudio[pasoIndice] = src;
    }

    // Si el usuario ya cambió de paso mientras se esperaba la respuesta, no reproducir.
    if (pasoIndice !== indice) { cargandoAudio = false; return; }

    audioActual = new Audio(src);
    audioActual.volume = volumen;
    audioActual.onended = () => { hablando = false; btnPlay.textContent = "▶"; };

    await audioActual.play();
    hablando = true;
    cargandoAudio = false;
    btnPlay.textContent = "❚❚";
  } catch (error) {
    console.error("Error al generar/reproducir narración con el backend TTS:", error);
    cargandoAudio = false;
    hablando = false;
    btnPlay.textContent = "▶";
    alert("No se pudo reproducir la narración. Revisa la configuración del backend y la conexión a internet.");
  }
}

function toggleNarracion(){
  const btnPlay = document.getElementById("btnPlay");

  if (cargandoAudio) return; // evita doble click mientras se está generando el audio

  if (hablando && audioActual) {
    audioActual.pause();
    hablando = false;
    btnPlay.textContent = "▶";
    return;
  }

  if (audioActual && audioActual.currentTime > 0 && !audioActual.ended) {
    audioActual.play();
    hablando = true;
    btnPlay.textContent = "❚❚";
    return;
  }

  reproducirNarracion();
}

function detenerNarracion(){
  if (audioActual) {
    audioActual.pause();
    audioActual.currentTime = 0;
  }
  hablando = false;
  document.getElementById("btnPlay").textContent = "▶";
}

function cambiarVolumen(nuevoVolumen){
  volumen = Number(nuevoVolumen);
  actualizarVistaVolumen(volumen);

  if (audioActual) {
    audioActual.volume = volumen;
  }

  actualizarBotonVolumen();
}

function actualizarVistaVolumen(nuevoVolumen){
  const controlVolumen = document.getElementById("controlVolumen");
  if (!controlVolumen) return;

  const porcentaje = Number(nuevoVolumen) * 100;
  controlVolumen.style.setProperty("--volumen-porcentaje", `${porcentaje}%`);
}

function togglePanelVolumen(){
  const volumenControl = document.getElementById("volumenControl");
  const btnVolumen = document.getElementById("btnVolumen");
  const abierto = volumenControl.classList.toggle("abierto");

  btnVolumen.setAttribute("aria-expanded", String(abierto));
}

function actualizarBotonVolumen(){
  const btnVolumen = document.getElementById("btnVolumen");
  if (!btnVolumen) return;

  btnVolumen.textContent = volumen === 0 ? "🔇" : "🔊";
  btnVolumen.title = volumen === 0 ? "Mostrar control de volumen (silenciado)" : "Mostrar control de volumen";
}

window.onload = () => {
  actualizarBotonVolumen();
  actualizarVistaVolumen(volumen);
  configurarVisorImagen();
};
