var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.5, -0.09]).addTo(map);
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

//Standalone popup
// var popup = L.popup()
//     .setLatLng([51.513, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(map);

// //OnClick event listener creates alert
// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
//     const clicked = L('<div></div>').attr('class', 'coordinates').text(e.latlng);
//     // const coords = document.getElementsByClassName('coordinates');
//     const map = document.getElementById('map')
//     map.append(clicked)

// }

map.on('click', onMapClick);

//OnClick event listener creates popup
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

// L.CustomHandler = L.Handler.extend({
//     addHooks: function() {
//         L.DomEvent.on(document, 'click', this._storeData, this);
//     },

//     removeHooks: function() {
//         L.DomEvent.off(document, 'click', this._storeData, this);
//     },

//     _storeData: function(e) {
//         const map = document.getElementById('map')
//         const data = document.createElement('div')
//         data.innerText = 'Previous Coordinates'
//         map.apppend(data)
//     }
// });
// L.Map.addInitHook('addHandler', 'storeData', L.CustomHandler);
// map.on('click', _storeData);

var myFeatureGroup = L.featureGroup().addTo(map).on("click", groupClick);
var marker, test;

for (var i = 0; i < 20; i += 1) {
  test = "test " + i;
  marker = L.marker(getRandomLatLng()).addTo(myFeatureGroup).bindPopup("Marker " + test);
  marker.test = test;
}

function groupClick(event) {
  console.log("Clicked on marker " + event.layer.test);
}

function getRandomLatLng() {
  return [
    48.86 + 0.1 * Math.random() - 0.05,
    2.35 + 0.1 * Math.random() - 0.05
  ];
}