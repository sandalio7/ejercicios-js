let mostrarObjeto = (serieParametro) =>{
    // obtener todas las claves de un objeto como si fuera un arreglo
    let claves = Object.keys(serieParametro);
    console.log(claves); //['nombre', 'temporadas', 'capitulos', 'premios']
    document.write('<br>Aqui comienza el arreglo');
    for(let i = 0; i < claves.length; i++){
        let propiedad = claves[i]; //'nombre'
        // document.write(`<br>${propiedad}: ${serieParametro[propiedad]}`)
        document.write('<br>'+propiedad+': '+serieParametro[propiedad]);   
    }
}

// let nombre = 'the office';
// let temporadas = 9;
// let genero = 'sitcom';
// let capitulos = 27;

// crear un objeto con notacion literal


let serie = {
    genero: 'sitcom',
    nombre : 'the office',
    temporadas: 9,
    capitulos: 27,
    ver: ()=>{console.log('viendo serie')},
    // detener: ()=>{...}
}

serie.ver();

// mostrar una propiedad de un objeto
document.write(`Serie: ${serie.nombre}`);
document.write(`<br>Capitulos: ${serie.capitulos}`);
// mostrar una propiedad de un objeto metodo 2
document.write(`<br>Temporadas: ${serie['temporadas']}`);
console.log(serie);

// modificar una propiedad de un objeto
serie.temporadas = 10;

document.write(`<br>Temporadas: ${serie['temporadas']}`);

// agregar una nueva propiedad a un objeto
serie.premios = true;
document.write(`<br>Premios: ${serie.premios}`);

// borrar una propiedad de un objeto
delete serie.genero;
console.log(serie);

// llamamos a la funcion
mostrarObjeto(serie);
