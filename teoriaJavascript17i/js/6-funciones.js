// funciones sin parametros
function aumentarPrecio(){
    console.log('prueba');
    let disney= 385;
    let inflacion = 150;
    document.write('Valor total del servicio disney plus $'+ (disney + inflacion));
};

// funcion con parametros
function actualizarPrecio(monto, producto, precio){
    document.write('<br>El producto: '+producto+' precio total $'+ (precio +monto));
}

// funciones que devuelven un valor
// function convertirDolaresPesos(precioDolar){
//     let total = precioDolar * 184;
//     return total;
//     // jamas escribimos en esta zona, la linea de return es la ultima que se ejecuta
// }

// funciones en forma de flecha =>
let convertirDolaresPesos = (precioDolar, dolarBlue) => {
    let total = precioDolar * 184;
    return total;
}



// invocar o llamar a una funcion
aumentarPrecio();

let coeficienteInflacion = parseInt(prompt('Ingrese el monto total de la inflacion del mes'));

actualizarPrecio(coeficienteInflacion, 'Teclado hyperx ',9000);
actualizarPrecio(coeficienteInflacion, 'Teclado Logitec ',14000);
actualizarPrecio('mouse logitec', 9000 , 100);

let dolarBlue = parseInt(prompt('Ingrese el valor del dolar Blue a la fecha'));
let iphone = convertirDolaresPesos(1200);

document.write('<br> Producto Iphone - precio $'+ iphone+'(producto nuevo)');
document.write('<br> Producto PS5 - precio $'+ convertirDolaresPesos(500)+'(ultima version)');

// document.write(`<br> Producto Iphone - precio $ ${iphone} (producto nuevo)`);
