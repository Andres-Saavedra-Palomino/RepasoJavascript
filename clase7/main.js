let baners_recursos = [
	"https://via.placeholder.com/1024x250?text=BANER+1",
	"https://via.placeholder.com/1024x250?text=BANER+2",
	"https://via.placeholder.com/1024x250?text=BANER+3",
	"https://via.placeholder.com/1024x250?text=BANER+4",]
let paginasRedesSociales = [
	"https://www.facebook.com/",
	"https://www.twitter.com/",
	"https://www.instagram.com/"]
let articulos_recursos = [
	{ titulo: "articulo_1", imagen: "https://via.placeholder.com/400?text=Articulo+1" },
	{ titulo: "articulo_2", imagen: "https://via.placeholder.com/400?text=Articulo+2" },
	{ titulo: "articulo_3", imagen: "https://via.placeholder.com/400?text=Articulo+3" },
	{ titulo: "articulo_4", imagen: "https://via.placeholder.com/400?text=Articulo+4" },
	{ titulo: "articulo_5", imagen: "https://via.placeholder.com/400?text=Articulo+5" },]

//Obtener el indice
function obtenerIndice(esteArray) {
	return Array.from(esteArray).indexOf(event.target)
}

// DIRSOCIAL
let iconosRedesSociales = document.getElementsByClassName('imgrs')
miseventos()
function miseventos() {
	for (let icono of iconosRedesSociales) {
		icono.addEventListener('click', dirsocial)
	}
}
let iSocial //indice del Array iconosRedesSociales
function dirsocial() {
	iSocial = obtenerIndice(iconosRedesSociales)
	window.open(paginasRedesSociales[iSocial])
}
//CAROUSEL
let i = 1 //indice del arreglo de imagenes para el carousel()
let miCarousel = document.getElementById('imgbaner')
carousel()
function carousel() {
	setInterval(() => {
		miCarousel.src = baners_recursos[i]
		i++
		i = i == 4 ? 0 : i
	}, 1000);
}

//CAMBIO
let enlacesBaners = document.getElementsByClassName('atipo')
for (let enlaceb of enlacesBaners) {
	enlaceb.addEventListener('click', cambio)
}
let ienlaceb
function cambio() {
	ienlaceb = obtenerIndice(enlacesBaners)
	miCarousel.src = baners_recursos[ienlaceb]
	i = ienlaceb
}
//VEREQUIPOS()
let enlacesArticulos = document.getElementsByClassName('artenlace')
let artT = document.getElementById('articuloTitulo')
let artI = document.getElementById('articuloImagen')
for (let enlacea of enlacesArticulos) {
	enlacea.addEventListener('click', verEquipos)
}
let iart
function verEquipos() {
	iart = obtenerIndice(enlacesArticulos)
	artT.innerHTML = articulos_recursos[iart].titulo
	artI.src = articulos_recursos[iart].imagen
}
