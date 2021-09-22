// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
let cadena = prompt("Ingrese un texto:");

for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena.charAt(i); //recupera el caracter i del string.
    if (i == cadena.length - 1) {
        document.write(caracter);
    } else {
        document.write(caracter + "-");
    }
}