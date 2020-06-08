const setImages = () => {
    let images = document.getElementById("images")
    let image = document.createElement("img")
    image.src = "images/pagina1/mountain.png"
    images.appendChild(image)
}

setImages()