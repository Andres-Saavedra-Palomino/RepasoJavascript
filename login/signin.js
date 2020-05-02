let correo = document.getElementById('inputEmail')
let pass = document.getElementById('inputPassword')

let btn = document.getElementById('btn_registrar')
btn.addEventListener('click', () => {
	let user = correo.value
	let ps = pass.value

	sessionStorage.setItem('user', user)
	sessionStorage.setItem('pass', ps)

	if (user == 'dios' && ps == 123)
		alert('Inicio de sesion exitoso')

})
console.log(sessionStorage.getItem('user'))
console.log(sessionStorage.getItem('pass'))
