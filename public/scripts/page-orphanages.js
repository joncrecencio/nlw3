const map = L.map('mapid').setView([-23.9616031,-46.378863], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// criando o icone

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Criando popup

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage?id=1" class="choose-orphanage"><img src="/images/arrow-white.svg"> </a>')


// criando marcação

L.marker([-23.9616031,-46.378863], { icon })
    .addTo(map)
    .bindPopup(popup)