const options = {
    dragging: false,
    touchZoom:false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// pegando valores dos span
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng



const map = L.map('mapid', options).setView([lat, lng], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// criando o icone

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


// criando marcação
L.marker([lat, lng], { icon }).addTo(map)


// galeria de imagens

function selectImage(event){
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((removeActiveClass))

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    // Selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // Atualizar o container de imagem
    imageContainer.src = image.src

    // Adicionar a classe .active para o botao clicado
    button.classList.add("active")
}
