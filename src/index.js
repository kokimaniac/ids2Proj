function imageElement() {
    let imgPath = window.location.href.split('/')
    imgPath.pop()
    const component = document.createElement("div")
    const img = document.createElement("img")
    img.src = `${imgPath.join('/')}/assets/ids2-image.png`
    img.id = "img-signature"
    img.addEventListener("click", function(){
        alert("¿Aquí se despliega el menú?")
    })
    component.className = "imgContainer"
    component.appendChild(img)
    return component
}
document.body.appendChild(imageElement())