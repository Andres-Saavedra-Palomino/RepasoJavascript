/* import { articulos_recursos, baners_recursos, paginasRedesSociales } from './recursos'*/
let baners_recursos = [
	"1",
	"2",
	"3",]
let paginasRedesSociales = [
	"https://www.facebook.com/",
	"https://www.twitter.com/",
	"https://www.instagram.com/"]
let articulos_recursos = [
	{ titulo: "articulo_1", imagen: "1" },
	{ titulo: "articulo_2", imagen: "2" },
	{ titulo: "articulo_3", imagen: "3" },
	{ titulo: "articulo_4", imagen: "4" },
	{ titulo: "articulo_5", imagen: "5" },]


//mis array enlaces de imagenes de redes sociales
let iconoRedesSociales = document.getElementsByClassName('imgrs')
miseventos()
function miseventos() {
	for (const iterator of iconoRedesSociales) {
		iterator.addEventListener('mouseover', ampliar)
		iterator.addEventListener('mouseout', reducir)
		iterator.addEventListener('click', social)
	}
}

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
	let iSocial = Array.from(iconoRedesSociales).indexOf(event.target)
	/* window.location.replace("URL") */
	window.open(paginasRedesSociales[iSocial])
}
//4
//iterador del Carousel
let i = 1
let miCarousel = document.getElementById('imgbaner')
function carousel() {

	setInterval(() => {
		miCarousel.src = `https://via.placeholder.com/900x250?text=BANER+${baners_recursos[i]}`
		i++
		i = i == 3 ? 0 : i
	}, 1000);
}
//5
//array de los enlaces
let enlaces = document.getElementsByClassName('atipo')
let artTitulo = document.getElementById('articuloTitulo')
let artImagen = document.getElementById('articuloImagen')

for (enlace of enlaces) {
	enlace.addEventListener('click', seleccion)
}
function seleccion() {
	let it = Array.from(enlaces).indexOf(event.target)
	artTitulo.innerText = articulos_recursos[it].titulo
	artImagen.src = `https://via.placeholder.com/400?text=Articulo+${articulos_recursos[it].imagen}`
}


document.addEventListener('DOMContentLoaded', carousel)
fetch('https://jsonplaceholder.typicode.com/photos')
	.then(response => response.json())
	.then(json => {
		let p20 = json.filter(a => a.id < 20)
		console.log(p20)
	})
