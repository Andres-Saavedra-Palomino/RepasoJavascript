//variables

var a = 12.12 //number

var b = "Roger" //string

var c = true //boolean

//console.log(a, b, c)

//Array

var d = [1, 2, 3, 4, 5]//conjunto de elementos listados
//console.log(d)

d.push(6, 7, 8)//agregar uno o varios elementos al final del Array
//console.log(d);

d.pop()//eliminar el ultimo elemento del Array
//console.log(d);

a = "5"
b = "7"
c = a + b

a = Math.random()
a = Math.pow(2, 4)
a = Math.sqrt(81)

//console.log(a);

var titulo = document.getElementById("inp_titulo")
var detalle = document.getElementById("inp_detalle")
var boton = document.getElementById("btn_agregar")
var lista = document.getElementById("lista")

/***********************************************/
//funciones

//forma1
agregar()
function agregar() {
	//event.preventDefault()
	var ti = titulo.value
	var de = detalle.value
	lista.innerHTML += `<li><h3>${ti}</h3><p>${de}</p></li>`
}

//forma2
//HOISTING
var e = function () {
	console.log("Andres")
}
e()

//funcion flecha
var f = () => console.log("ASDASD")
f()


boton.addEventListener("click", agregar)
