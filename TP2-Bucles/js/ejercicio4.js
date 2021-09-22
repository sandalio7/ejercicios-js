// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;
let numero = 0;

do {
	numero = prompt('Ingresa un numero');
	//pregunto si es un numero
	console.log(numero);
	if (!isNaN(numero) && numero !=null) {
		//ej ingreso E isNan devuelve verdadero cuando lo que paso entre () no es un numero
		//isNaN(E) -> respuesta !verdadero -> false
		//isNaN(3) -> respuesta !falso -> verdadero
		
		//!true => false
        //console.log(numero);
        suma = suma + parseInt(numero);
        console.log(suma);
	} else {
		//si presione aceptar sin poner un numero valido
		if (numero != null) {
			alert(numero + ' No es un numero');
		}
	}
	//ejecutar mientras no presione cancelar
} while (numero != null);

document.write(suma);
