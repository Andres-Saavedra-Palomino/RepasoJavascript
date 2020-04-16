//iterador
var i = 1
//recursos / imagenes-rutas
var banerImg = [
	"https://via.placeholder.com/800x250",
	"https://via.placeholder.com/700x250",
	"https://via.placeholder.com/600x250",
	"https://via.placeholder.com/500x250"]


function activar(int) {
	document.getElementById('imgbaner').src = banerImg[int]
	i = int
}

function carrusel() {
	var imagenes = document.getElementsByName('rbop')

	setInterval(() => {
		imagenes[i].checked = true
		activar(i)
		i++
		i = i == 4 ? 0 : i
	}, 1000);

}

function marcado() {
	this.style = 'border:1px solid red'
}
function desmarcado() {
	this.style = 'border:1px solid transparent'
}

function myHover() {
	var art = document.getElementsByClassName('artpesca')
	for (const a of art) {
		a.addEventListener('mouseover', marcado)
		a.addEventListener('mouseout', desmarcado)
	}
}
