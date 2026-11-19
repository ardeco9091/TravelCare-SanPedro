// =========================================================
// CATÁLOGO AMPLIADO VERIFICADO EN GOOGLE MAPS — SAN PEDRO DE JUJUY
// 26 prestadores y servicios reales en Alojamiento, Salud y Transporte
// + Panel de Autogestión (Admin) e Integrantes del Proyecto
// =========================================================
const CENTRO_SAN_PEDRO = [-24.2312, -64.8682];
const DEFAULT_TEAM = {
  integrantes: "Cargando equipo...",
  institucion: "Prácticas Profesionalizantes II · Tecnicatura Superior en Ciencia de Datos e IA — IES N.° 9",
  destino: "Piloto San Pedro de Jujuy (2026)"
};

const DEFAULT_LUGARES = [
  // ======================== ALOJAMIENTO (7) ========================
  {
    id: 1,
    nombre: "Catalina Hotel",
    categoria: "alojamiento",
    categoriaLabel: "Alojamiento",
    direccion: "Vélez Sársfield 85, Centro",
    estado: "Abierto 24 hs",
    abiertoAhora: true,
    destacado: true,
    promocion: "Desayuno, Wi-Fi y cochera cubierta incluidos (4.4 ★ en Google)",
    notas: "Habitaciones con aire acondicionado · Recepción 24 hs · Tel: (03888) 42-9010",
    telefono: "+543888429010",
    whatsapp: "5493888429010",
    lat: -24.23042,
    lng: -64.86825
  },
  {
    id: 2,
    nombre: "Hotel Vélez Sarsfield",
    categoria: "alojamiento",
    categoriaLabel: "Alojamiento",
    direccion: "Vélez Sársfield 154, Centro",
    estado: "Recepción 24 hs",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Ubicación céntrica a pasos de Plaza Belgrano (4.2 ★) · Tel: (03888) 42-0446",
    telefono: "+543888420446",
    whatsapp: "5493888420446",
    lat: -24.23102,
    lng: -64.86855
  },
  {
    id: 3,
    nombre: "Hotel Bella Vista",
    categoria: "alojamiento",
    categoriaLabel: "Alojamiento",
    direccion: "Calle Haití, San Pedro de Jujuy",
    estado: "Abierto 24 hs",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Habitaciones dobles y compartidas, comedor y bar · Tel: (03888) 42-0213",
    telefono: "+543888420213",
    whatsapp: "5493888420213",
    lat: -24.22550,
    lng: -64.86150
  },
  {
    id: 4,
    nombre: "Residencial Oasis",
    categoria: "alojamiento",
    categoriaLabel: "Alojamiento",
    direccion: "23 de Agosto 330",
    estado: "Lun a Sáb · 08:00 a 23:45 hs",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Hospedaje céntrico · Lun a Sáb 08:00 a 23:45 hs · Tel: (03888) 42-3545",
    telefono: "+543888423545",
    whatsapp: "5493888423545",
    lat: -24.23390,
    lng: -64.86940
  },
  {
    id: 5,
    nombre: "Hotel Abby",
    categoria: "alojamiento",
    categoriaLabel: "Alojamiento",
    direccion: "Suipacha 880",
    estado: "Recepción diaria",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Alojamiento accesible en zona residencial · Tel: (03888) 42-2799",
    telefono: "+543888422799",
    whatsapp: "5493888422799",
    lat: -24.23620,
    lng: -64.87120
  },
  {
    id: 6,
    nombre: "Hospedaje La Casona",
    categoria: "alojamiento",
    categoriaLabel: "Alojamiento",
    direccion: "Hernán Díaz 4500",
    estado: "Atención personalizada",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Estadías por día y semanales (4.4 ★ en Google) · Tel: (03888) 57-3666",
    telefono: "+543888573666",
    whatsapp: "5493888573666",
    lat: -24.22820,
    lng: -64.87210
  },
  {
    id: 7,
    nombre: "Residencial Candela",
    categoria: "alojamiento",
    categoriaLabel: "Alojamiento",
    direccion: "Zona Centro, San Pedro de Jujuy",
    estado: "Disponible",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Residencial turístico con más de 150 reseñas en Google Maps",
    telefono: null,
    whatsapp: null,
    lat: -24.22940,
    lng: -64.86690
  },

  // ======================== SALUD Y FARMACIAS (12) ========================
  {
    id: 8,
    nombre: "Farmacia Nueva Alberdi",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Juan Bautista Alberdi 174, Centro",
    estado: "Horario extendido · 08:00 a 00:00 hs",
    abiertoAhora: true,
    destacado: true,
    promocion: "Atención continua hasta medianoche · Acceso adaptado",
    notas: "Lun a Sáb 08:00 a 00:00 hs · Dom cerrado · Tel: (03888) 42-5994",
    telefono: "+543888425994",
    whatsapp: "5493888425994",
    lat: -24.23052,
    lng: -64.86732
  },
  {
    id: 9,
    nombre: "Hospital Dr. Guillermo C. Paterson",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Av. Siria 44",
    estado: "Guardia 24 hs",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Hospital público de referencia · Guardia médica 24 hs · Tel: (03888) 42-0006",
    telefono: "+543888420006",
    whatsapp: null,
    lat: -24.22685,
    lng: -64.86490
  },
  {
    id: 10,
    nombre: "Sanatorio Santa María",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Aristóbulo del Valle 347",
    estado: "Abierto · 08:00 a 00:00 hs",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Atención médica privada todos los días · Tel: (03888) 42-4327",
    telefono: "+543888424327",
    whatsapp: null,
    lat: -24.23265,
    lng: -64.86785
  },
  {
    id: 11,
    nombre: "Clínica Avenida SRL",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Walterio Leach 418",
    estado: "Consultorios y guardia",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Lun a Dom 07:00 a 13:00 y 15:00 a 22:00 hs · Tel: (03888) 42-0033",
    telefono: "+543888420033",
    whatsapp: null,
    lat: -24.23410,
    lng: -64.86890
  },
  {
    id: 12,
    nombre: "SIMA Centro de Diagnóstico",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Gdor. Tello 595",
    estado: "Diagnóstico por imágenes",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Lun a Vie 07:00 a 21:00 hs · Sáb 09:00 a 12:00 hs · Tel: (03888) 42-2798",
    telefono: "+543888422798",
    whatsapp: "5493888422798",
    lat: -24.23340,
    lng: -64.87050
  },
  {
    id: 13,
    nombre: "Centro Médico San Gregorio",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Pedro Goyena 33",
    estado: "Consultorios externos",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Lun a Vie 08:30 a 12:30 y 17:00 a 20:00 hs · Sáb 09:00 a 12:00 · Tel: (03888) 48-0686",
    telefono: "+543888480686",
    whatsapp: "5493888480686",
    lat: -24.22890,
    lng: -64.86640
  },
  {
    id: 14,
    nombre: "Farmacia del Milagro",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Gdor. Tello 185, Centro",
    estado: "Atención comercial",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Atención farmacéutica personalizada (4.8 ★) · Tel: (03888) 42-1636",
    telefono: "+543888421636",
    whatsapp: "5493888421636",
    lat: -24.22966,
    lng: -64.86818
  },
  {
    id: 15,
    nombre: "Farmacia San José",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Aristóbulo del Valle 317",
    estado: "Lun a Sáb",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Lun a Vie 08:30 a 21:30 hs · Sáb 08:30 a 21:00 hs · Tel: (03888) 42-9697",
    telefono: "+543888429697",
    whatsapp: "5493888429697",
    lat: -24.23245,
    lng: -64.86765
  },
  {
    id: 16,
    nombre: "Farmacia San José II",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Av. 9 de Julio 303",
    estado: "Sucursal 9 de Julio",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Lun a Sáb 08:30 a 14:30 y 17:30 a 21:30 hs (5.0 ★) · Tel: (03888) 42-6216",
    telefono: "+543888426216",
    whatsapp: "5493888426216",
    lat: -24.23320,
    lng: -64.86510
  },
  {
    id: 17,
    nombre: "Farmacia Central",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Vélez Sársfield 196",
    estado: "Obras sociales y vacunas",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "PAMI, OSDE, IOSFA y vacunatorio · Tel: (03888) 42-1492",
    telefono: "+543888421492",
    whatsapp: null,
    lat: -24.23142,
    lng: -64.86872
  },
  {
    id: 18,
    nombre: "Farmacia Far-Mar",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Alsina 430, Centro",
    estado: "Atención comercial",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Medicamentos y perfumería en zona céntrica (4.7 ★ en Google)",
    telefono: null,
    whatsapp: null,
    lat: -24.23153,
    lng: -64.86556
  },
  {
    id: 19,
    nombre: "Farmacia Rotger",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Zona Centro, San Pedro de Jujuy",
    estado: "Horario cortado",
    abiertoAhora: false,
    destacado: false,
    promocion: null,
    notas: "Mar a Vie 09:00 a 13:00 y 17:00 a 21:30 hs · Sáb 09:00 a 13:00 · Tel: (03888) 42-5851",
    telefono: "+543888425851",
    whatsapp: null,
    lat: -24.23020,
    lng: -64.86950
  },
  {
    id: 20,
    nombre: "Farmacia La Perla",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Av. Brasil 62",
    estado: "Horario cortado",
    abiertoAhora: false,
    destacado: false,
    promocion: null,
    notas: "Lun a Sáb 08:30 a 12:30 y 17:30 a 21:30 hs · Tel: (03888) 42-9583",
    telefono: "+543888429583",
    whatsapp: null,
    lat: -24.24226,
    lng: -64.87470
  },
  {
    id: 21,
    nombre: "Farmacia SAVIC",
    categoria: "salud",
    categoriaLabel: "Salud y farmacias",
    direccion: "Calle Espinoza",
    estado: "Guardia fin de semana",
    abiertoAhora: false,
    destacado: false,
    promocion: null,
    notas: "Lun a Vie 09:00 a 13:00 y 17:30 a 21:30 hs · Sáb noche · Tel: (03888) 42-5138",
    telefono: "+543888425138",
    whatsapp: null,
    lat: -24.22480,
    lng: -64.86710
  },

  // ======================== TRANSPORTE LOCAL (6) ========================
  {
    id: 22,
    nombre: "Cooperativa de Remises LAPACHO LTDA",
    categoria: "transporte",
    categoriaLabel: "Transporte local",
    direccion: "Serapio Soria 198",
    estado: "Abierto 24 hs",
    abiertoAhora: true,
    destacado: true,
    promocion: "Flota 24 hs · Móviles habilitados en toda la ciudad (4.5 ★)",
    notas: "Servicio continuo las 24 hs todos los días · Tel: (03888) 43-4768",
    telefono: "+543888434768",
    whatsapp: "5493888434768",
    lat: -24.23355,
    lng: -64.86625
  },
  {
    id: 23,
    nombre: "Cop de Remis 2 de Abril",
    categoria: "transporte",
    categoriaLabel: "Transporte local",
    direccion: "Juan Bautista Alberdi 648",
    estado: "Abierto 24 hs",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Traslados urbanos y regionales las 24 hs · Tel: (03888) 42-0739",
    telefono: "+543888420739",
    whatsapp: "5493888420739",
    lat: -24.22892,
    lng: -64.86285
  },
  {
    id: 24,
    nombre: "Cooperativa de Transporte San Pedro Limitada",
    categoria: "transporte",
    categoriaLabel: "Transporte local",
    direccion: "Vélez Sársfield 445",
    estado: "Transporte local",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Servicio de transporte local (4.7 ★ en Google) · Tel: (03888) 30-9061",
    telefono: "+543888309061",
    whatsapp: "5493888309061",
    lat: -24.23382,
    lng: -64.86992
  },
  {
    id: 25,
    nombre: "Radio Taxi Lapacho",
    categoria: "transporte",
    categoriaLabel: "Transporte local",
    direccion: "Base Central San Pedro",
    estado: "Radio llamado 24 hs",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Despacho rápido de taxis urbanos · Tel: (03888) 43-4768",
    telefono: "+543888434768",
    whatsapp: "5493888434768",
    lat: -24.23210,
    lng: -64.86790
  },
  {
    id: 26,
    nombre: "Terminal de Ómnibus Cnel. Eustaquio Medina",
    categoria: "transporte",
    categoriaLabel: "Transporte local",
    direccion: "Los Claveles / Av. Presidente Perón",
    estado: "Abierto 24 hs",
    abiertoAhora: true,
    destacado: false,
    promocion: null,
    notas: "Colectivos provinciales, larga distancia y parada de taxis · Tel: (03888) 42-3806",
    telefono: "+543888423806",
    whatsapp: null,
    lat: -24.23480,
    lng: -64.86410
  }
];

// Fichas oficiales de Google Maps verificadas para los 26 registros iniciales.
// Los enlaces se mantienen en el cliente para no cambiar el esquema de Supabase.
const GOOGLE_MAPS_URL_BY_PLACE_ID = {
  1: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJV5yJv3FZGpQRLBvyjsFcwYs",
  2: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJoyZkgWVYGpQRn5M--x9-2PA",
  3: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJaYk5nUJYGpQRdXXR6WH2sCY",
  4: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJPUNeSntYGpQRauvnWDelZCc",
  5: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJp-JvwXxYGpQRahiYk6mfmgo",
  6: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJXXk3hqZZGpQRjPNmWkwME5c",
  7: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJqSJCI2hYGpQRfDtCPN_8PFc",
  8: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJoSvePmRYGpQRfPNJ290ruUg",
  9: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJ1yOXPG9YGpQRFkJ1dyAVD5Y",
  10: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJheh1MmRYGpQR4jYeGVvnw3c",
  11: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJH-Yo3WRYGpQRfaf4ZpYEZpk",
  12: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJSwmAfmNYGpQRQY2u47wn1OY",
  13: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJ1aehyptZGpQR_yRkf1Z9Szs",
  14: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJV4jEOmVYGpQRNZEYQwjhs7E",
  15: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJa539zGVYGpQRsM-Pkdm4H18",
  16: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJRSjii7NZGpQRPxF5t5dCyk8",
  17: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJ308YeWVYGpQRwFWD_9cGVpA",
  18: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJ8e6YZmRYGpQR3gSc-dJg_lM",
  19: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJHe4uvWhYGpQRZXie0X0v-HQ",
  20: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJ_-KWdlhZGpQR-AIy01xLd8M",
  21: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJHwLerkFYGpQR7prBQaFMmkE",
  22: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJiYAWs89ZGpQRy8Qpt9M9emI",
  23: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJw3V_LfZZGpQRlIRGI7IQWrs",
  24: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJ84UVtHpYGpQRZdmZ_3WgBZs",
  25: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJBTZQVbFZGpQRoBdEUExxCY4",
  26: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJsa0unnpYGpQR44OYAuFAmFM"
};

function obtenerUrlGoogleMaps(lugar) {
  return GOOGLE_MAPS_URL_BY_PLACE_ID[lugar.id] ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${lugar.nombre} ${lugar.direccion}, San Pedro de Jujuy`)}`;
}

const COLORES_CATEGORIA = {
  alojamiento: "#26333d",
  salud: "#7f9278",
  transporte: "#c27d5e"
};

const NOMBRES_CATEGORIA = {
  alojamiento: "Alojamiento",
  salud: "Salud y farmacias",
  transporte: "Transporte local"
};

let LUGARES = JSON.parse(JSON.stringify(DEFAULT_LUGARES));
let EQUIPO = { ...DEFAULT_TEAM };

// =========================================================
// ESTADO EFÍMERO EN MEMORIA (PRIVACY FIREWALL PARA EL VIAJERO)
// =========================================================
let categoriaActiva = "todas";
let textoBusqueda = "";
let ordenActual = "cercania";
let soloAbiertos = false;
let ubicacionUsuario = null;

let mapa = null;
let capaMarcadores = null;
let marcadorUsuario = null;
const marcadoresPorId = {};

// Referencias al DOM
const screenWelcome = document.getElementById("screen-welcome");
const screenHome = document.getElementById("screen-home");
const btnExplore = document.getElementById("btn-explore");
const btnBackWelcome = document.getElementById("btn-back-welcome");
const btnNavHome = document.getElementById("btn-nav-home");
const searchInput = document.getElementById("search-input");
const btnClearSearch = document.getElementById("btn-clear-search");
const categoryCards = document.querySelectorAll(".category-card");
const sortSelect = document.getElementById("sort-select");
const btnOnlyOpen = document.getElementById("btn-only-open");
const filterLabel = document.getElementById("filter-label");
const resultsCountSide = document.getElementById("results-count-side");
const btnResetFilter = document.getElementById("btn-reset-filter");
const btnRecenter = document.getElementById("btn-recenter");
const placesList = document.getElementById("places-list");

const btnGeo = document.getElementById("btn-geo");
const btnGeoText = document.getElementById("btn-geo-text");
const btnGeoInline = document.getElementById("btn-geo-inline");
const geoStatusBar = document.getElementById("geo-status-bar");

const btnEmergency = document.getElementById("btn-emergency");
const emergencyModal = document.getElementById("emergency-modal");
const btnCloseModal = document.getElementById("btn-close-modal");

// =========================================================
// RENDERIZADO DE INTEGRANTES DEL PROYECTO
// =========================================================
function actualizarCreditosUI() {
  const welcomeTeam = document.getElementById("welcome-team-names");
  const footerInst = document.getElementById("footer-institution");
  const footerTeam = document.getElementById("footer-team-display");

  if (welcomeTeam) {
    welcomeTeam.textContent = `Integrantes: ${EQUIPO.integrantes}`;
  }
  if (footerInst) {
    footerInst.textContent = EQUIPO.institucion;
  }
  if (footerTeam) {
    footerTeam.textContent = `Integrantes: ${EQUIPO.integrantes} · ${EQUIPO.destino}`;
  }
}

// =========================================================
// FÓRMULA DE HAVERSINE PARA DISTANCIA REAL EN KILÓMETROS
// =========================================================
function calcularDistanciaKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function formatearDistancia(km) {
  if (km < 1) {
    return `${Math.round(km * 1000)} m`;
  }
  return `${km.toFixed(1)} km`;
}

// =========================================================
// GEOLOCALIZACIÓN EFÍMERA CON OPT-IN EXPLÍCITO
// =========================================================
function activarGeolocalizacionEfimera() {
  if (!("geolocation" in navigator)) {
    alert("Tu navegador no soporta geolocalización. Se mantienen las distancias desde el centro.");
    return;
  }

  btnGeoText.textContent = "Ubicando...";
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      ubicacionUsuario = [pos.coords.latitude, pos.coords.longitude];
      btnGeo.classList.add("geo-btn--active");
      btnGeoText.textContent = "GPS Activo";
      geoStatusBar.innerHTML = `
        Ubicación efímera activa en tu dispositivo ·
        <button type="button" id="btn-geo-clear" class="inline-link-btn">Borrar ubicación</button>
      `;
      document.getElementById("btn-geo-clear").addEventListener("click", limpiarUbicacionEfimera);

      dibujarMarcadorUsuario();
      renderizarServicios();
    },
    () => {
      btnGeoText.textContent = "Mi ubicación";
      geoStatusBar.innerHTML = `
        No se pudo acceder al GPS · Mostrando distancias desde el centro ·
        <button type="button" id="btn-geo-retry" class="inline-link-btn">Reintentar</button>
      `;
      document.getElementById("btn-geo-retry").addEventListener("click", activarGeolocalizacionEfimera);
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
  );
}

function limpiarUbicacionEfimera() {
  ubicacionUsuario = null;
  btnGeo.classList.remove("geo-btn--active");
  btnGeoText.textContent = "Mi ubicación";
  if (marcadorUsuario && mapa) {
    mapa.removeLayer(marcadorUsuario);
    marcadorUsuario = null;
  }
  geoStatusBar.innerHTML = `
    Distancias calculadas desde Plaza Gral. Belgrano (Centro) ·
    <button type="button" id="btn-geo-inline" class="inline-link-btn">Activar GPS efímero</button>
  `;
  document.getElementById("btn-geo-inline").addEventListener("click", activarGeolocalizacionEfimera);
  renderizarServicios();
}

function dibujarMarcadorUsuario() {
  if (!mapa || !ubicacionUsuario) return;
  if (marcadorUsuario) {
    mapa.removeLayer(marcadorUsuario);
  }
  const userIcon = L.divIcon({
    className: "",
    html: `<div class="user-pin" title="Tu ubicación actual"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });
  marcadorUsuario = L.marker(ubicacionUsuario, { icon: userIcon })
    .bindPopup("<strong>Tu ubicación actual</strong><br/><span style='font-size:11px;'>Procesada solo en tu dispositivo</span>")
    .addTo(mapa);
}

btnGeo.addEventListener("click", () => {
  if (ubicacionUsuario) {
    limpiarUbicacionEfimera();
  } else {
    activarGeolocalizacionEfimera();
  }
});

if (btnGeoInline) {
  btnGeoInline.addEventListener("click", activarGeolocalizacionEfimera);
}

// =========================================================
// NAVEGACIÓN ENTRE PANTALLA 1 Y PANTALLA 2
// =========================================================
function irAInicio() {
  screenHome.classList.remove("screen--active");
  screenWelcome.classList.add("screen--active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

btnExplore.addEventListener("click", () => {
  screenWelcome.classList.remove("screen--active");
  screenHome.classList.add("screen--active");
  window.scrollTo({ top: 0, behavior: "instant" });

  if (!mapa) {
    inicializarMapa();
  } else {
    setTimeout(() => mapa.invalidateSize(), 120);
  }
});

btnBackWelcome.addEventListener("click", irAInicio);
if (btnNavHome) {
  btnNavHome.addEventListener("click", irAInicio);
}

window.addEventListener("resize", () => {
  if (mapa && screenHome.classList.contains("screen--active")) {
    mapa.invalidateSize();
  }
});

// =========================================================
// INICIALIZACIÓN DEL MAPA (LEAFLET + ESRI WORLD STREET MAP)
// =========================================================
function inicializarMapa() {
  mapa = L.map("map", {
    center: CENTRO_SAN_PEDRO,
    zoom: 15,
    zoomControl: true
  });

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "Esri · San Pedro de Jujuy",
      maxZoom: 19
    }
  ).addTo(mapa);

  capaMarcadores = L.layerGroup().addTo(mapa);
  if (ubicacionUsuario) {
    dibujarMarcadorUsuario();
  }
  renderizarServicios();
  setTimeout(() => mapa.invalidateSize(), 150);
}

function crearIconoPin(categoria) {
  const color = COLORES_CATEGORIA[categoria] || "#26333d";
  return L.divIcon({
    className: "",
    html: `<div class="custom-pin" style="background-color: ${color};"><span class="custom-pin__inner"></span></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
  });
}

// =========================================================
// FILTRADO INTELIGENTE, DISTANCIAS Y RENDERIZADO
// =========================================================
function obtenerLugaresProcesados() {
  const puntoOrigen = ubicacionUsuario || CENTRO_SAN_PEDRO;

  const conDistancia = LUGARES.map((lugar) => ({
    ...lugar,
    distanciaKm: calcularDistanciaKm(puntoOrigen[0], puntoOrigen[1], lugar.lat, lugar.lng)
  }));

  const filtrados = conDistancia.filter((lugar) => {
    const coincideCategoria =
      categoriaActiva === "todas" || lugar.categoria === categoriaActiva;

    const coincideAbierto = !soloAbiertos || lugar.abiertoAhora;

    const termino = textoBusqueda.trim().toLowerCase();
    const coincideTexto =
      termino === "" ||
      lugar.nombre.toLowerCase().includes(termino) ||
      lugar.direccion.toLowerCase().includes(termino) ||
      lugar.notas.toLowerCase().includes(termino) ||
      lugar.estado.toLowerCase().includes(termino) ||
      lugar.categoriaLabel.toLowerCase().includes(termino);

    return coincideCategoria && coincideAbierto && coincideTexto;
  });

  filtrados.sort((a, b) => {
    if (ordenActual === "destacados") {
      if (a.destacado !== b.destacado) return a.destacado ? -1 : 1;
      return a.distanciaKm - b.distanciaKm;
    }
    if (ordenActual === "nombre") {
      return a.nombre.localeCompare(b.nombre, "es");
    }
    return a.distanciaKm - b.distanciaKm;
  });

  return filtrados;
}

function renderizarServicios() {
  const filtrados = obtenerLugaresProcesados();

  if (resultsCountSide) {
    resultsCountSide.textContent = `${filtrados.length} ${filtrados.length === 1 ? "lugar" : "lugares"}`;
  }

  if (categoriaActiva === "todas") {
    filterLabel.textContent = `Todos (${filtrados.length})`;
    btnResetFilter.classList.add("hidden");
  } else {
    filterLabel.textContent = `${NOMBRES_CATEGORIA[categoriaActiva]} (${filtrados.length})`;
    btnResetFilter.classList.remove("hidden");
  }

  if (mapa && capaMarcadores) {
    capaMarcadores.clearLayers();
    Object.keys(marcadoresPorId).forEach((k) => delete marcadoresPorId[k]);

    const bounds = [];
    if (ubicacionUsuario) {
      bounds.push(ubicacionUsuario);
    }

    filtrados.forEach((lugar) => {
      const googleMapsUrl = obtenerUrlGoogleMaps(lugar);
      const distTexto = formatearDistancia(lugar.distanciaKm);
      const waText = encodeURIComponent(`Hola ${lugar.nombre}, los encontré en TravelCare (San Pedro de Jujuy) y quería hacer una consulta.`);
      const waLink = lugar.whatsapp
        ? `<a href="https://wa.me/${lugar.whatsapp}?text=${waText}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:5px 10px;background:#25874b;color:#fff;border-radius:7px;text-decoration:none;font-size:11px;font-weight:600;margin-left:5px;">WhatsApp</a>`
        : "";

      const popupHtml = `
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; min-width: 210px;">
          <span style="font-size: 10px; font-weight: 700; color: ${COLORES_CATEGORIA[lugar.categoria]}; text-transform: uppercase;">
            ${lugar.categoriaLabel} · ${distTexto}
          </span><br/>
          <strong style="font-size: 14px; color: #222c34;">${lugar.nombre}</strong><br/>
          <span style="font-size: 11px; font-weight: 700; color: #1f7a37;">● ${lugar.estado}</span><br/>
          <span style="font-size: 12px; color: #5b656d;">${lugar.direccion}</span><br/>
          <span style="font-size: 11px; color: #222c34;">${lugar.notas}</span><br/><br/>
          <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer"
             style="display: inline-block; padding: 5px 10px; background: #222c34; color: #fff; border-radius: 7px; text-decoration: none; font-size: 11px; font-weight: 600;">
            Cómo llegar →
          </a>
          ${waLink}
        </div>
      `;

      const marker = L.marker([lugar.lat, lugar.lng], {
        icon: crearIconoPin(lugar.categoria)
      })
        .bindPopup(popupHtml, { maxWidth: 270 })
        .bindTooltip(`${lugar.nombre} (${distTexto})`);

      marker.addTo(capaMarcadores);
      marcadoresPorId[lugar.id] = marker;
      bounds.push([lugar.lat, lugar.lng]);
    });

    if (bounds.length > 0) {
      mapa.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
    } else {
      mapa.setView(CENTRO_SAN_PEDRO, 14);
    }
  }

  placesList.innerHTML = "";
  if (filtrados.length === 0) {
    placesList.innerHTML = `<div class="empty-state">No se encontraron servicios con ese filtro. Probá con otro término.</div>`;
    return;
  }

  filtrados.forEach((lugar) => {
    const googleMapsUrl = obtenerUrlGoogleMaps(lugar);
    const distTexto = formatearDistancia(lugar.distanciaKm);
    const waText = encodeURIComponent(`Hola ${lugar.nombre}, los encontré en TravelCare (San Pedro de Jujuy) y quería hacer una consulta.`);

    const badgeDestacado = lugar.destacado
      ? `<span class="badge-featured">★ DESTACADO</span>`
      : "";

    const promoHtml = lugar.promocion
      ? `<p class="place-item__promo">✦ ${lugar.promocion}</p>`
      : "";

    const waBtnHtml = lugar.whatsapp
      ? `<a href="https://wa.me/${lugar.whatsapp}?text=${waText}" target="_blank" rel="noopener noreferrer" class="action-btn action-btn--wa">WhatsApp</a>`
      : "";

    const telBtnHtml = lugar.telefono
      ? `<a href="tel:${lugar.telefono}" class="action-btn action-btn--tel">Llamar</a>`
      : "";

    const card = document.createElement("article");
    card.className = `place-item ${lugar.destacado ? "place-item--featured" : ""}`;
    card.innerHTML = `
      <div class="place-item__top">
        <div class="place-item__badges">
          <span class="place-item__tag place-item__tag--${lugar.categoria}">${lugar.categoriaLabel}</span>
          ${badgeDestacado}
          <span class="badge-open">${lugar.estado}</span>
        </div>
        <span class="place-item__dist" title="${ubicacionUsuario ? "Distancia desde tu GPS" : "Distancia desde el centro"}">${distTexto}</span>
      </div>

      <div>
        <h4 class="place-item__title">${lugar.nombre}</h4>
        <p class="place-item__addr">${lugar.direccion}</p>
      </div>

      <p class="place-item__notes">${lugar.notas}</p>
      ${promoHtml}

      <div class="place-item__actions">
        <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="action-btn action-btn--map">
          Cómo llegar
        </a>
        ${waBtnHtml}
        ${telBtnHtml}
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      const marker = marcadoresPorId[lugar.id];
      if (marker && mapa) {
        mapa.setView([lugar.lat, lugar.lng], 16, { animate: true });
        marker.openPopup();
        if (window.innerWidth < 980) {
          document.getElementById("map").scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    });

    placesList.appendChild(card);
  });
}

// =========================================================
// PANEL DE CONSULTA DE PRESTADORES Y EQUIPO
// =========================================================
const adminModal = document.getElementById("admin-modal");
const btnOpenAdmin = document.getElementById("btn-open-admin");
const btnCloseAdmin = document.getElementById("btn-close-admin");
const btnEditCredits = document.getElementById("btn-edit-credits");
const adminTabs = document.querySelectorAll(".admin-tab");
const adminViewServicios = document.getElementById("admin-view-servicios");
const adminViewEquipo = document.getElementById("admin-view-equipo");
const adminCountBadge = document.getElementById("admin-count-badge");

const adminPlaceForm = document.getElementById("admin-place-form");
const adminFormTitle = document.getElementById("admin-form-title");
const btnCancelEdit = document.getElementById("btn-cancel-edit");
const editPlaceId = document.getElementById("edit-place-id");
const fNombre = document.getElementById("f-nombre");
const fCategoria = document.getElementById("f-categoria");
const fDireccion = document.getElementById("f-direccion");
const fEstado = document.getElementById("f-estado");
const fTelefono = document.getElementById("f-telefono");
const fWhatsapp = document.getElementById("f-whatsapp");
const fNotas = document.getElementById("f-notas");
const fZona = document.getElementById("f-zona");
const fPromocion = document.getElementById("f-promocion");
const fDestacado = document.getElementById("f-destacado");
const fAbierto = document.getElementById("f-abierto");

const adminSearch = document.getElementById("admin-search");
const adminPlacesTable = document.getElementById("admin-places-table");
const btnExportJson = document.getElementById("btn-export-json");

const adminTeamForm = document.getElementById("admin-team-form");
const tIntegrantes = document.getElementById("t-integrantes");
const tInstitucion = document.getElementById("t-institucion");
const tDestino = document.getElementById("t-destino");
const supabaseConnectionStatus = document.getElementById("supabase-connection-status");
const supabaseAuthForm = document.getElementById("supabase-auth-form");
const supabaseEmailInput = document.getElementById("supabase-email");
const supabasePasswordInput = document.getElementById("supabase-password");
const supabaseAuthStatus = document.getElementById("supabase-auth-status");
const btnSupabaseSignOut = document.getElementById("btn-supabase-sign-out");

const supabaseConfig = window.TRAVELCARE_SUPABASE_CONFIG || {};
const supabaseConfigured = Boolean(supabaseConfig.url && supabaseConfig.publishableKey);
let supabaseClient = null;
let esAdmin = false;

function mostrarEstadoSupabase(mensaje) {
  supabaseAuthStatus.textContent = mensaje;
}

function actualizarControlesAdmin() {
  adminPlaceForm.hidden = !esAdmin;
  adminTeamForm.querySelectorAll("input, textarea").forEach((campo) => {
    campo.readOnly = !esAdmin;
  });
  adminTeamForm.querySelector('button[type="submit"]').disabled = !esAdmin;
  if (esAdmin) adminTeamForm.querySelector('button[type="submit"]').textContent = "Guardar integrantes";
  renderizarListaAdmin();
}

function convertirLugarDesdeSupabase(row) {
  return {
    id: row.id,
    nombre: row.nombre,
    categoria: row.categoria,
    categoriaLabel: row.categoria_label,
    direccion: row.direccion,
    estado: row.estado,
    abiertoAhora: row.abierto_ahora,
    destacado: row.destacado,
    promocion: row.promocion,
    notas: row.notas,
    telefono: row.telefono,
    whatsapp: row.whatsapp,
    lat: Number(row.lat),
    lng: Number(row.lng)
  };
}

async function cargarDatosSupabase() {
  if (!supabaseClient) return;
  const { data: lugares, error: errorLugares } = await supabaseClient
    .from("places")
    .select("*")
    .order("id");
  if (errorLugares) throw errorLugares;

  const { data: equipo, error: errorEquipo } = await supabaseClient
    .from("project_settings")
    .select("integrantes, institucion, destino")
    .eq("id", "main")
    .maybeSingle();
  if (errorEquipo) throw errorEquipo;

  LUGARES = (lugares || []).map(convertirLugarDesdeSupabase);
  if (equipo) EQUIPO = { ...DEFAULT_TEAM, ...equipo };
  actualizarCreditosUI();
  renderizarServicios();
  renderizarListaAdmin();
  tIntegrantes.value = EQUIPO.integrantes;
  tInstitucion.value = EQUIPO.institucion;
  tDestino.value = EQUIPO.destino;
}

async function actualizarSesionAdmin(session) {
  esAdmin = false;
  supabaseAuthForm.classList.toggle("hidden", Boolean(session));
  btnSupabaseSignOut.classList.toggle("hidden", !session);

  if (!session) {
    mostrarEstadoSupabase(supabaseConfigured
      ? "Ingresá con la cuenta administradora creada en Supabase."
      : "Configurá la URL y la clave pública de Supabase para habilitar el acceso.");
  } else {
    const { data, error } = await supabaseClient.rpc("is_travelcare_admin");
    esAdmin = !error && data === true;
    mostrarEstadoSupabase(error
      ? "No se pudieron comprobar los permisos. Revisá schema.sql en Supabase."
      : esAdmin
        ? `Sesión administradora: ${session.user.email}`
        : "La cuenta inició sesión, pero aún no tiene permiso de administradora.");
  }

  actualizarControlesAdmin();
}

async function inicializarSupabase() {
  if (!supabaseConfigured || !window.supabase?.createClient) {
    supabaseAuthForm.classList.add("hidden");
    supabaseConnectionStatus.textContent = "Creá un proyecto Supabase y completá supabase-config.js para guardar cambios en la nube.";
    actualizarControlesAdmin();
    return;
  }

  supabaseClient = window.supabase.createClient(supabaseConfig.url, supabaseConfig.publishableKey);
  supabaseConnectionStatus.textContent = "Conectando con la base de datos de TravelCare…";
  try {
    await cargarDatosSupabase();
    supabaseConnectionStatus.textContent = "Catálogo sincronizado con Supabase.";
  } catch (error) {
    supabaseConnectionStatus.textContent = `No se pudo cargar Supabase: ${error.message}`;
  }

  const { data, error } = await supabaseClient.auth.getSession();
  if (error) mostrarEstadoSupabase(`No se pudo leer la sesión: ${error.message}`);
  await actualizarSesionAdmin(data?.session || null);
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    setTimeout(() => actualizarSesionAdmin(session), 0);
  });
}

supabaseAuthForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!supabaseClient) return;
  mostrarEstadoSupabase("Ingresando…");
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: supabaseEmailInput.value.trim(),
    password: supabasePasswordInput.value
  });
  supabasePasswordInput.value = "";
  if (error) {
    mostrarEstadoSupabase(`No se pudo iniciar sesión: ${error.message}`);
    return;
  }
  await actualizarSesionAdmin(data.session);
});

btnSupabaseSignOut.addEventListener("click", async () => {
  if (!supabaseClient) return;
  const { error } = await supabaseClient.auth.signOut();
  if (error) mostrarEstadoSupabase(`No se pudo cerrar sesión: ${error.message}`);
  else await actualizarSesionAdmin(null);
});

adminPlaceForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!supabaseClient || !esAdmin) return;
  const [lat, lng] = fZona.value.split(",").map(Number);
  const categoria = fCategoria.value;
  const payload = {
    nombre: fNombre.value.trim(),
    categoria,
    categoria_label: NOMBRES_CATEGORIA[categoria],
    direccion: fDireccion.value.trim(),
    estado: fEstado.value.trim(),
    telefono: fTelefono.value.trim() || null,
    whatsapp: fWhatsapp.value.trim() || null,
    notas: fNotas.value.trim(),
    promocion: fPromocion.value.trim() || null,
    destacado: fDestacado.checked,
    abierto_ahora: fAbierto.checked,
    lat,
    lng
  };
  const id = Number(editPlaceId.value);
  const { error } = id
    ? await supabaseClient.from("places").update(payload).eq("id", id)
    : await supabaseClient.from("places").insert(payload);
  if (error) {
    mostrarEstadoSupabase(`No se pudo guardar el prestador: ${error.message}`);
    return;
  }
  adminPlaceForm.reset();
  editPlaceId.value = "";
  adminFormTitle.textContent = "Agregar nuevo comercio / servicio";
  btnCancelEdit.classList.add("hidden");
  fAbierto.checked = true;
  try {
    await cargarDatosSupabase();
    mostrarEstadoSupabase("Prestador guardado en Supabase.");
  } catch (loadError) {
    mostrarEstadoSupabase(`El cambio se guardó, pero no se pudo actualizar la vista: ${loadError.message}`);
  }
});

btnCancelEdit.addEventListener("click", () => {
  adminPlaceForm.reset();
  editPlaceId.value = "";
  adminFormTitle.textContent = "Agregar nuevo comercio / servicio";
  btnCancelEdit.classList.add("hidden");
  fAbierto.checked = true;
});

adminTeamForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!supabaseClient || !esAdmin) return;
  const payload = {
    id: "main",
    integrantes: tIntegrantes.value.trim(),
    institucion: tInstitucion.value.trim(),
    destino: tDestino.value.trim(),
    updated_at: new Date().toISOString()
  };
  const { error } = await supabaseClient.from("project_settings").upsert(payload);
  if (error) {
    mostrarEstadoSupabase(`No se pudieron guardar los integrantes: ${error.message}`);
    return;
  }
  EQUIPO = { ...DEFAULT_TEAM, ...payload };
  actualizarCreditosUI();
  mostrarEstadoSupabase("Integrantes y datos del proyecto guardados en Supabase.");
});

function abrirPanelAdmin(tabInicial = "servicios") {
  adminModal.classList.remove("hidden");
  cambiarTabAdmin(tabInicial);
  renderizarListaAdmin();
  tIntegrantes.value = EQUIPO.integrantes;
  tInstitucion.value = EQUIPO.institucion;
  tDestino.value = EQUIPO.destino;
}

function cambiarTabAdmin(tab) {
  adminTabs.forEach((t) => {
    t.classList.toggle("admin-tab--active", t.dataset.adminTab === tab);
  });
  adminViewServicios.classList.toggle("hidden", tab !== "servicios");
  adminViewEquipo.classList.toggle("hidden", tab !== "equipo");
}

btnOpenAdmin.addEventListener("click", () => abrirPanelAdmin("servicios"));
btnCloseAdmin.addEventListener("click", () => adminModal.classList.add("hidden"));
if (btnEditCredits) {
  btnEditCredits.addEventListener("click", () => abrirPanelAdmin("equipo"));
}

adminModal.addEventListener("click", (e) => {
  if (e.target === adminModal) adminModal.classList.add("hidden");
});

adminTabs.forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => cambiarTabAdmin(tabBtn.dataset.adminTab));
});

function renderizarListaAdmin() {
  adminCountBadge.textContent = String(LUGARES.length);
  const filtro = (adminSearch.value || "").trim().toLowerCase();
  const lista = LUGARES.filter(
    (l) =>
      filtro === "" ||
      l.nombre.toLowerCase().includes(filtro) ||
      l.categoriaLabel.toLowerCase().includes(filtro) ||
      l.direccion.toLowerCase().includes(filtro)
  );

  adminPlacesTable.innerHTML = "";
  lista.forEach((lugar) => {
    const row = document.createElement("div");
    row.className = "admin-row";
    const info = document.createElement("div");
    info.className = "admin-row__info";
    const nombre = document.createElement("strong");
    nombre.textContent = lugar.nombre;
    const detalle = document.createElement("p");
    detalle.textContent = `${lugar.categoriaLabel} · ${lugar.direccion} · ${lugar.estado}`;
    info.append(nombre, detalle);
    row.append(info);

    if (esAdmin) {
      const controls = document.createElement("div");
      controls.className = "admin-row__controls";
      controls.innerHTML = `
        <button type="button" class="mini-pill-btn ${lugar.destacado ? "mini-pill-btn--star" : ""}" data-action="star" data-id="${lugar.id}">
          ${lugar.destacado ? "★ Destacado" : "☆ Básico"}
        </button>
        <button type="button" class="mini-pill-btn" data-action="edit" data-id="${lugar.id}">Editar</button>
        <button type="button" class="mini-pill-btn mini-pill-btn--del" data-action="delete" data-id="${lugar.id}">Eliminar</button>
      `;
      row.append(controls);
    }
    adminPlacesTable.appendChild(row);
  });
}

adminPlacesTable.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button || !esAdmin || !supabaseClient) return;
  const id = Number(button.dataset.id);
  const action = button.dataset.action;
  const place = LUGARES.find((item) => item.id === id);

  if (action === "edit" && place) {
    editPlaceId.value = String(place.id);
    adminFormTitle.textContent = `Editando: ${place.nombre}`;
    btnCancelEdit.classList.remove("hidden");
    fNombre.value = place.nombre;
    fCategoria.value = place.categoria;
    fDireccion.value = place.direccion;
    fEstado.value = place.estado;
    fTelefono.value = place.telefono || "";
    fWhatsapp.value = place.whatsapp || "";
    fNotas.value = place.notas || "";
    fPromocion.value = place.promocion || "";
    fDestacado.checked = Boolean(place.destacado);
    fAbierto.checked = Boolean(place.abiertoAhora);
    const nearestZone = [...fZona.options].sort((a, b) => {
      const distance = (option) => {
        const [optionLat, optionLng] = option.value.split(",").map(Number);
        return Math.hypot(optionLat - place.lat, optionLng - place.lng);
      };
      return distance(a) - distance(b);
    })[0];
    if (nearestZone) fZona.value = nearestZone.value;
    adminPlaceForm.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (action === "delete" && place && confirm(`¿Eliminar ${place.nombre}?`)) {
    const { error } = await supabaseClient.from("places").delete().eq("id", id);
    if (error) {
      mostrarEstadoSupabase(`No se pudo eliminar el prestador: ${error.message}`);
      return;
    }
  } else if (action === "star" && place) {
    const { error } = await supabaseClient.from("places").update({ destacado: !place.destacado }).eq("id", id);
    if (error) {
      mostrarEstadoSupabase(`No se pudo actualizar el destacado: ${error.message}`);
      return;
    }
  } else {
    return;
  }

  try {
    await cargarDatosSupabase();
    mostrarEstadoSupabase("Cambios guardados en Supabase.");
  } catch (error) {
    mostrarEstadoSupabase(`El cambio se guardó, pero no se pudo actualizar la vista: ${error.message}`);
  }
});

adminSearch.addEventListener("input", renderizarListaAdmin);

btnExportJson.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify({ equipo: EQUIPO, servicios: LUGARES }, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "travelcare-sanpedro-datos.json";
  a.click();
  URL.revokeObjectURL(url);
});

// =========================================================
// EVENTOS DE CATEGORÍAS, FILTROS Y CONTROLES
// =========================================================
categoryCards.forEach((btn) => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.category;
    if (categoriaActiva === cat) {
      categoriaActiva = "todas";
      btn.classList.remove("category-card--active");
    } else {
      categoriaActiva = cat;
      categoryCards.forEach((c) => c.classList.remove("category-card--active"));
      btn.classList.add("category-card--active");
    }
    renderizarServicios();
  });
});

btnResetFilter.addEventListener("click", () => {
  categoriaActiva = "todas";
  categoryCards.forEach((c) => c.classList.remove("category-card--active"));
  renderizarServicios();
});

sortSelect.addEventListener("change", (e) => {
  ordenActual = e.target.value;
  renderizarServicios();
});

btnOnlyOpen.addEventListener("click", () => {
  soloAbiertos = !soloAbiertos;
  btnOnlyOpen.classList.toggle("chip-toggle--active", soloAbiertos);
  btnOnlyOpen.setAttribute("aria-pressed", String(soloAbiertos));
  renderizarServicios();
});

searchInput.addEventListener("input", (e) => {
  textoBusqueda = e.target.value;
  btnClearSearch.classList.toggle("hidden", textoBusqueda.length === 0);
  renderizarServicios();
});

btnClearSearch.addEventListener("click", () => {
  searchInput.value = "";
  textoBusqueda = "";
  btnClearSearch.classList.add("hidden");
  renderizarServicios();
});

btnRecenter.addEventListener("click", () => {
  if (mapa) {
    mapa.setView(ubicacionUsuario || CENTRO_SAN_PEDRO, 15, { animate: true });
  }
});

// Modal de teléfonos útiles
btnEmergency.addEventListener("click", () => emergencyModal.classList.remove("hidden"));
btnCloseModal.addEventListener("click", () => emergencyModal.classList.add("hidden"));
emergencyModal.addEventListener("click", (e) => {
  if (e.target === emergencyModal) emergencyModal.classList.add("hidden");
});

// Inicializar créditos y contadores al cargar
actualizarCreditosUI();
renderizarServicios();
inicializarSupabase();
