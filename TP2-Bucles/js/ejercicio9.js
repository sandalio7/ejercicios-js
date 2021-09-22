// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10

//crear variables
let j = 500;
let rep = 0;
//bucle desde 1 hasta j=500
for (let i = 1; i <= j; i++) {
    document.write(i);
    //si el resto de dividir i/4 es igual a 0
    if (i % 4 == 0) {
        document.write(" (Multiplo de 4)");
    }
    //si el resto de dividir i/9 es igual a 0
    if (i % 9 == 0) {
        document.write(" (Multiplo de 9)");
    }
    //agrego un salto de linea
    document.write("<br>");
    //si es multiplo de 5 imprimir linea
    if (i % 5 == 0) {
        document.write("<hr>");
    }
}