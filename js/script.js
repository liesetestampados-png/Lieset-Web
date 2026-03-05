function consultar(producto){

let mensaje = "Hola quiero consultar por " + producto

let url = "https://wa.me/549XXXXXXXXXX?text=" + encodeURIComponent(mensaje)

window.open(url)

}