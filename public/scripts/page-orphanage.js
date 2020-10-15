const options = {
    dragging: false,
    touchzoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map("mapid", options).setView([-27.2196371, -49.6467162], 15);

// create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add map
L.marker([-27.2196371, -49.6467162], {
        icon
    })
    .addTo(map)

// image gallery
function selectImage(event) {
    // "currentTarget" -. qula é o alvo atual que está disparando o evento, é o button
    const button = event.currentTarget

    // romover todas as "class=''active", de todos os butões que tiveram a classe
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    //selecinar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanege-detials > img")
    // atualizar o conteiner de imagem 
    imageContainer.src = image.src;
    // adiconar a classe .active para o botão que foi clicado
    button.classList.add("active");
}