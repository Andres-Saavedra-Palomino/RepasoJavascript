





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
sumar(1, 3)
function sumar(a = 5, b) {
	console.log(a + b);
}

var fun = function resta(a, b) {
	console.log(a - b);
}
fun(2, 3)

var flecha = (a, b) => a + b
console.log(flecha(2, 3))
