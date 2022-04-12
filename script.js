var map = L.map('map').setView([51.505, -0.09], 13);

var tiles = L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

/* adding a marker */
/* Hawler Coordinates = 36.1901° N, 43.9930° E */
var marker = L.marker([36.19, 44.009]).addTo(map);

/* adding circle around Qaray Hawler*/
/* Erbil Castle Coordinates: 36.191377, 44.009065 */
var circle = L.circle([36.19, 44.009], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 1000,
}).addTo(map);

/* adding polygon */
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(map);

/* binding popups to map objects */
marker.bindPopup('<b>Hello!</b><br>I am a popup.').openPopup();
circle.bindPopup('I am a circle.');
polygon.bindPopup('I am a polygon.');

/* Click event handler */
var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent('You clicked the map at ' + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);
