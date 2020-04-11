









//declaracion de variables
var x//undefined variable de tipo sin definir

//declarando e instanciando variables
var a = 1  //1  variable de tipo number
var b = "andres" //andres variable de tipo String
var c = true //true variable de tipo boolean

var y = null //null variable nula

//re-instanciando variables
a = "Saavedra"
b = false
c = 43.32

//usamos console.log  para anotar en la consola
console.log(a);//Saavedra
console.log(b);//false

/*****************************************/
//Arrays
var conjuntoA = [0, 1, "Andres"]//conjunto de elementos listados
console.log(conjuntoA);

conjuntoA.push(2, 3) //agregar uno o mas elementos al Array
console.log(conjuntoA);
conjuntoA.pop(1) //elimina el ultimo elemento del Array
console.log(conjuntoA);

//identificamos las etiquetas con el ID y las guardamos en variables
var n1 = document.getElementById("num1")
var n2 = document.getElementById("num2")
var btn = document.getElementById("btn")
var res = document.getElementById("res")

/*********************************************/

//funciones

function sumar(a, b) {
	return a + b
}
console.log(sumar(2, 2))

var fun = function resta(a, b) {
	console.log(a - b)
}
fun(2, 3)

//funcion flecha
var flecha = (a, b) => a + b
console.log(flecha(2, 3))

/*******************************************/

var resultados = []
btn.addEventListener("click", () => {
	//guardando los datos
	var input1 = +n1.value
	var input2 = +n2.value
	var r = sumar(input1, input2)

	//engordando el Array
	resultados.push(r)

	//mostrandolo en el div
	res.innerHTML += `${r}<br>`

	//limpiando los input
	n1.value = ""
	n2.value = ""

	console.log(resultados);

})
