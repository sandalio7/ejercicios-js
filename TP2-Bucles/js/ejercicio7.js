// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1


//solicitar un numero
let numrep = parseInt(prompt("Ingresa un numero de repeticiones entre 1 y 50"));
//verifico si es un numero
if (!isNaN(numrep) && numrep !=null) {
    //verifico si el numero esta entre 1 y 50
    if (numrep >= 1 && numrep <= 50) {
        //bucle que comienza desde numrep hasta 1
        for (let i = numrep; i >= 1; i--) {
            //bucle interno desde i hasta 1
            for (let rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } else {
        alert("El número introducido no es válido");
    }
} else {
    alert("valor erroneo");
}