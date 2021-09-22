// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt("Ingresa tu edad"));

//verificar si el numero ingresado es valido
if (!isNaN(edad)) {
    if (edad >= 18) {
        document.write("Puedes conducir");
    }else{
        document.write("Aun eres pequeño para conducir");
    }
}else {
    alert("Introduce un numero válido");
}