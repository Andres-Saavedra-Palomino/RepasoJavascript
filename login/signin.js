let correo = document.getElementById('inputEmail')
let pass = document.getElementById('inputPassword')



let usuarioGuardado = sessionStorage.getItem('user')
let contraseniaGuardada = sessionStorage.getItem('pass')

let btn = document.getElementById('btn_registrar')
btn.addEventListener('click', () => {
	let user = correo.value
	let ps = pass.value

	if (usuarioGuardado && user == usuarioGuardado)
		if (contraseniaGuardada && ps == contraseniaGuardada)
			alert('Inicio de sesion exitoso')


	sessionStorage.setItem('user', user)
	sessionStorage.setItem('pass', ps)
})

console.log({ usuarioGuardado })
console.log({ contraseniaGuardada })
