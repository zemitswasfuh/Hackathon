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

// map.on('click', onMapClick);

//OnClick event listener creates popup
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

const mapEl = document.getElementById('map');

function createDiv (e) {
    const coordsEl = document.getElementsByClassName('coords')
    let newDiv = document.createElement('div');
    newDiv.innerText = 'Coordinates: ' + e.latlng.toString()
    coordsEl[0].append(newDiv)
    console.log(e.latlng.toString())
}
map.on('click', createDiv);

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

