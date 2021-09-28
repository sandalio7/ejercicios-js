function verMas () {
    console.log('desde la funcion ver mas')
    let boton = document.getElementById('btnVerMas')

    //paso 1 - buscar padre
    let articulos = document.getElementsByTagName('article')
    console.log(articulos[1])

    if(boton.innerHTML == 'Ver mas'){
        let parrafo = document.createElement('p')
        parrafo.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas labore excepturi ratione animi nihil nulla beatae porro minima, officia maiores eum rerum, quibusdam dolore minus ut et tempora dolor iusto aliquam nesciunt ab suscipit! Sed commodi cum nobis. Rerum reiciendis ab, dolor itaque quo provident explicabo recusandae dolores est nobis!'
        parrafo.className = 'btn btn-outline-danger'
    }else{
        console.log(articulos[1].children)
        if(articulos[1].hasChildNodes && articulos[1].children.lenght > 3){
            articulos[1].removeChild(articulos[1].children[2])
        }
        boton.innerHTML = 'Ver mas'
        boton.className = 'btn btn-outline-primary'
    }
}

