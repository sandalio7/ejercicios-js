//Persona-> nombre, apellido, dni, usuario, pass, comision,
//Alumno-> nombre, apellido, dni, usuario, pass, comision, curso, legajo,
//Tutor-> nombre, apellido, dni, usuario, pass, comision, id, antiguedad

class Persona {
  constructor(paramNombre,paramApellido,paramDni,paramUsuario,paramPass,paramComision) {
    this.nombre = paramNombre;
    this.apellido = paramApellido;
    this.dni = paramDni;
    this.usuario = paramUsuario;
    this.pass = paramPass;
    this.comision = paramComision;
  }

  mostrarDatos() {
    // document.write('nombre:'+this.nombre + )
    document.write(`Nombre: ${this.nombre}<br>DNI: ${this.dni}<br>usuario: ${this.usuario}<br>Apellido: ${this.apellido}<br>pass: ${this.pass}<br>comision: ${this.comision}`);
  }

  mostrarNombreCompleto() {
    document.write(`Nombre: ${this.nombre} Apellido: ${this.apellido}`);
  }

  //   propiedades conmutadas getters y setters

  get mostrarComision() {
    return this.comision;
  }

  set modificarComision(nuevaComision) {
    this.comision = nuevaComision;
  }

  get mostrarUsuario() {
    return this.usuario;
  }

  set modificarDni(nuevoDni) {
    this.dni = nuevoDni;
  }
}

class Alumno extends Persona {
  constructor(
    nombre,
    paramApellido,
    paramDni,
    paramUsuario,
    paramPass,
    paramComision,
    paramLegajo,
    paramCurso
  ) {
    super(
      nombre,
      paramApellido,
      paramDni,
      paramUsuario,
      paramPass,
      paramComision
    );
    this.legajo = paramLegajo;
    this.curso = paramCurso;
    this.estado = true;
  }

mostrarDatos(){
    document.write(`<br>Nombre: ${this.nombre}
    <br>Apellido: ${this.apellido}
    <br>DNI: ${this.dni}
    <br>usuario: ${this.usuario}
    <br>pass: ${this.pass}
    <br>comision: ${this.comision}
    <br>legajo: ${this.legajo}
    <br>curso: ${this.curso}
    `);
}


}

let lily = new Persona("lili", "Cerda", 33444555, "lcerda", "hdjfh23", "17i");
lily.mostrarDatos();

document.write("<br>Usuario: " + lily.mostrarUsuario);

// usar el setter
let otroDni = 35467666;

lily.modificarDni = otroDni;
lily.mostrarDatos();

let jonathan = new Alumno('Jonathan','Singh',33444666,'jsingh','shdjk222','17i',1234,'Fullstack');

jonathan.mostrarDatos();



