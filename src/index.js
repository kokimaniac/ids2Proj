function imageElement() {
    const component = document.createElement("div")
    const img = document.createElement("img")
    img.src = "/assets/ids2-image.png"
    img.id = "img-signature"
    component.className = "imgContainer"
    component.appendChild(img)
    return component
}
document.body.appendChild(imageElement())