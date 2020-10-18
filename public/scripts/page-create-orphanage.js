const map = L.map('mapid').setView([-23.9616031,-46.378863], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// criando o icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

let marker


//  criando as marcas
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    // Pegar inputs vazios
    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // Remover icone e adiciona somente um
    marker && map.removeLayer(marker)

    // opçao de adicionar o icone ao marker
    marker = L.marker([lat, lng], {icon}).addTo(map)
})


// adicionar campo de fotos
function addPhotoField(){
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')

    // Pegar o container para duplicação .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // Realizar a duplicação da ultima imagem adicionada
    const newFiledContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    // verificar se antes de clonar o primeiro estará vazio, se sim, não clonar.
    const input = newFiledContainer.children[0]
    
    if(input.value == ""){
        return
    }

    // Limpar o campo antes de adicionar ao container de imagens
    input.value = " "

    // Adicionar o clone ao container de #images
    container.appendChild(newFiledContainer)
}

// função para deletar o field colocado erroneamente
function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {
        // Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo
    span.parentNode.remove();
}

// Troca do sim e nao (na seleção)
function toggleSelect(event) {

    // Retirar a class .active dos dois botões
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })

    // Colocar a class .active nesse botão quando clicado
    const button = event.currentTarget
    button.classList.add('active')

    // Atualizar o meu input hidden com o valor selecionado 
    const input = document.querySelector('[name = "open_on_weekends"]')
    
    // Verificar se é sim ou não
    input.value = button.dataset.value
}

function validate(event){
    // Validar se lat e lng estão preenchidos
    const latitude = document.querySelector('[name=lat]').value
    const longitude = document.querySelector('[name=lng]').value

    if(latitude == "" && longitude == ""){
        alert("Selecione um ponto no mapa!")
        event.preventDefault()
    }
}


    