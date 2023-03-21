let map = L.map('map').setView([50.95092236438795, 6.918813447851555], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([50.950066, 6.922497]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am based here!").openPopup();
    
