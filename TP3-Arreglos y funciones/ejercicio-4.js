function parImpar(numeroEntero) {
    let valor = parseInt(numeroEntero)
    let tipo = (valor%2)?'Impar':'Par';
    if(tipo == 'Impar'){
        document.write('el valor introducido es Impar')

    }else {
        document.write('el valor introducido es Par')
    }
}