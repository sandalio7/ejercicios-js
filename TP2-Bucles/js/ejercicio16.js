// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let cadena = prompt("Ingrese un Texto");
let caracter, salida = "";

for (let j = 0; j < cadena.length; j++) {
    caracter = cadena.charAt(j); //recupera el caracter de la posicion j del string.
    salida = caracter + salida;
}
document.write(salida);