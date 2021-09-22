// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let cadena = prompt("Ingrese una cadena de texto:");
cadena = cadena.toUpperCase(); //Devuelve el string en mayúsculas.
let caracter;
let contador = 0;

for (let i = 0; i < cadena.length; i++) {
  caracter = cadena.charAt(i); //recupera el caracter i del string.
  if (
    caracter == "A" ||
    caracter == "E" ||
    caracter == "I" ||
    caracter == "O" ||
    caracter == "U"
  ) {
    contador++;
  }
}
document.write(`Número de Vocales: ${contador}`);
