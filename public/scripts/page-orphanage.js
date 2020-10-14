const options = {
    dragging: false,
    touchZoom:false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-23.9616031,-46.378863], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// criando o icone

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


// criando marcação

L.marker([-23.9616031,-46.378863], { icon })
    .addTo(map)

// galeria de imagens

function selectImage(event){
    console.log("cliquei")
}

// parei em 2:48:56