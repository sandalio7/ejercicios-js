// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456

let numrep = parseInt(prompt("Ingrese el numero de repeticiones entre 1 y 50"));
//verificar si se ingreso un numero
if (!isNaN(numrep) && numrep!=null) {
    //verificar si el numero esta entre 1 y 50
    if (numrep >= 1 && numrep <= 50) {
        for (let i = 0; i <= numrep; i++) {
            for (let rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    } else {
        alert("El número introducido no es válido");
    }
} else {
    alert("valor erroneo");
}