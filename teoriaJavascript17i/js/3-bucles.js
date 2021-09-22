// document.write('Elemento 1 <br>');
// document.write('Elemento 2 <br>');
// document.write('Elemento 3 <br>');
// document.write('Elemento 4 <br>');
// document.write('Elemento 5 <br>');
// document.write('Elemento 6 <br>');
// document.write('Elemento 7 <br>');
// document.write('Elemento 8 <br>');

// while

/*
while(condicion){
    codigo a ejecutar si se cumple la condicion
    cambiar condicion 
}
*/

let contador = 1000;

while(contador <= 100){
    document.write('Elemento '+ contador +'<br>');
    // contador++ 
    contador = contador +1;
}


// do-while hacer ... mientras (se cumple la condicion)
/*
do{
    codigo a ejecutar
    cambio la condicion
}while(condicion)
*/

// let elemento = 100;

// do{
//     document.write('Elemento do-while '+ elemento +'<br>');
//     elemento--;
// }while(elemento >= 1)

// Estructura for

/*
for(crear la variable; condicion; incremento o decremento el valor de la variable){
    codigo a ejecutar
}
*/

for(let i= 1; i<= 100; i++){
    document.write('Elemento '+ i +'<br>');
}