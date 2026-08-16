/* Config de ciudad — shell compartido (_motor/dashboard_kit). live=true: feed GTFS-RT vía capturador Cloud Run. */
window.CITY = {
  slug: "punta_arenas",
  nombre: "Punta Arenas",
  sigla: "PA",
  lat0: -53.1537, lon0: -70.9211,
  comunas: ["Punta Arenas"],
  comunasGeojson: "comunas_punta_arenas.geojson",
  live: true,
  liveBase: "https://storage.googleapis.com/puntaarenas-transporte-live/",
  repo: "transportepublicoPuntaArenas",
  voz: {"ejeSing": "eje", "ejePlur": "ejes", "EjePlur": "Ejes"},
};
