// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt('Ingrese un numero de filas'));
let columnas = parseInt(prompt('Ingrese un numero de columnas'));
// total valor para cargar las celdas de la tabla
let total = filas * columnas;

document.write('<table border>');
for(let indiceFila=0; indiceFila < filas; indiceFila++){
    // aqui dibujo la fila
    document.write('<tr>');
    // dibujar las celdas
    for(let indiceColumna=0; indiceColumna< columnas; indiceColumna++){
        document.write('<td>'+total);
         document.write('</td>');
         total--; //total = total-1;
    }
    document.write('</tr>');
}
document.write('</table>');