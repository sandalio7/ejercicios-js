// crear una clase
class Serie {
    // con este metodo se crean los objetos
    constructor(parametroNombre, parametroTemporadas, parametroCapitulos, parametroGenero){
        // crear las propiedades del objeto
        this.nombre = parametroNombre;
        this.temporadas = parametroTemporadas;
        this.capitulos = parametroCapitulos;
        this.genero = parametroGenero;
        this.publicado = false; //propiedad por defecto
    }
    // aqui van nuestros metodos
    mostrarDatos(){
        document.write('Serie: '+ this.nombre +' Temporadas: '+ this.temporadas+'<br>');
    }

    mostrarDatosExtendido(){
        // mostrar todas las propiedades del objeto '' o `` 
    }

}

// utilizar la clase o crear o instanciar objetos
let theOffice = new Serie('The Office',9,27,'sitcom');
let vikingos = new Serie('Vikings',5,20,'Accion');

console.log(theOffice);

theOffice.mostrarDatos();
vikingos.mostrarDatos();



