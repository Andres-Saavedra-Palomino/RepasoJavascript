/* import { articulos_recursos, baners_recursos, paginasRedesSociales } from './recursos'*/
var baners_recursos = [
	"https://via.placeholder.com/900x250?text=BANER+1",
	"https://via.placeholder.com/900x250?text=BANER+2",
	"https://via.placeholder.com/900x250?text=BANER+3",]
var paginasRedesSociales = [
	"https://www.facebook.com/",
	"https://www.twitter.com/",
	"https://www.instagram.com/"]
var articulos_recursos = [
	{ titulo: "articulo_1", imagen: "https://via.placeholder.com/400?text=Articulo+1" },
	{ titulo: "articulo_2", imagen: "https://via.placeholder.com/400?text=Articulo+2" },
	{ titulo: "articulo_3", imagen: "https://via.placeholder.com/400?text=Articulo+3" },
	{ titulo: "articulo_4", imagen: "https://via.placeholder.com/400?text=Articulo+4" },
	{ titulo: "articulo_5", imagen: "https://via.placeholder.com/400?text=Articulo+5" },]


//mis array enlaces de imagenes de redes sociales
var iconoRedesSociales = document.getElementsByClassName('imgrs')
function miseventos() {
	for (const iterator of iconoRedesSociales) {
		iterator.addEventListener('mouseover', ampliar)
		iterator.addEventListener('mouseout', reducir)
		iterator.addEventListener('click', social)
	}
}
miseventos()
//1
function ampliar() {
	this.classList.add("ampliar")
	this.classList.remove("reducir")
}
//2
function reducir() {
	//this.classList.replace("ampliar", "reducir")
	this.classList.add("reducir")
	this.classList.remove("ampliar")
}
//3
function social() {
	var iSocial = Array.from(iconoRedesSociales).indexOf(event.target)
	/* window.location.replace("URL") */
	window.open(paginasRedesSociales[iSocial])
}
//4
//iterador del Carousel
var i = 1
var miCarousel = document.getElementById('imgbaner')
function carousel() {

	setInterval(() => {
		miCarousel.src = baners_recursos[i]
		i++
		i = i == 3 ? 0 : i
	}, 1000);
}
//5
//array de los enlaces
var enlaces = document.getElementsByClassName('atipo')
var artTitulo = document.getElementById('articuloTitulo')
var artImagen = document.getElementById('articuloImagen')
function seleccion() {
	var it = Array.from(enlaces).indexOf(event.target)
	artTitulo.innerText = articulos_recursos[it].titulo
	artImagen.src = articulos_recursos[it].imagen
}

for (let index = 0; index < enlaces.length; index++) {
	enlaces[index].addEventListener('click', seleccion)
}

document.addEventListener('DOMContentLoaded', carousel)
