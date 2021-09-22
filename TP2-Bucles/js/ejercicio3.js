// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
let resultado = '';
do {
	let palabra = prompt('Ingresa una palabra');
	if (resultado == '') {
		//si es la primer palabra, concateno sin usar el guion
		resultado = palabra;
	} else {
		resultado = resultado + '-' + palabra;
	}
} while ( confirm('¿Desea continuar?'));

document.write(resultado);
