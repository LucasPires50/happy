// create map
const map = L.map("mapid").setView([-27.2196371, -49.6467162], 15);

// create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

// guarda o resultado da função abaixo
let marker;

// create and add markers
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // para pegar o valor dos input escondidos no html
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {
            icon
        })
        .addTo(map)
})

// add  o campo de fotos
function addPhotoField() {
    // pegar o conteiner de fotos #images
    const container = document.querySelector('#images')
    // pegar o conteiner para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da última imagem adicionada
    const newfieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o campo está vazio, se sim, não adicionar ao contreiner de imagens
    const input = newfieldContainer.children[0]

    if (input.value == "") {
        return
    }

    // limpar o campo antes de adicionar ao container de imagens
    newfieldContainer.children[0].value = ""

    // addiconar o clone ao conteiner de #imagens
    container.appendChild(newfieldContainer)
}

// removo o campo de foto
function deleteField(event) {
    // pegar a tag span que esta com o onclick da função
    const span = event.currentTarget
    // pegar o conteiner para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
        //limpar o valor somente do primero campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();

}

// selecionar sim ou não
function toggleSelect(event){
    // retirar a classe .active no botão clicado
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    // colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active');

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weeksends"]')

    input.value = button.dataset.value
}
