let auto = {
    color: 'rojo',
    marca: 'toyota',
    modelo: 'corolla',
    estado: 'apagado'
}


function prenderApagar() {
    if(auto.estado === 'apagado'){
        auto.estado = 'prendido'
        console.log(auto.estado)
    }else if(auto.estado === 'prendido' ){
        auto.estado = 'apagado'
        console.log(auto.estado)
    }
}

