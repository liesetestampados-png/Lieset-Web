function consultar(producto){

let mensaje = "Hola quiero consultar por este articulo " + producto

let url = "https://wa.me/5492646237734 text=" + encodeURIComponent(mensaje)

window.open(url)

}