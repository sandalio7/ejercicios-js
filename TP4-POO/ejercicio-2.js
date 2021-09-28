class cuenta {
    constructor(titular,saldo,){
        this.titular = titular
        this.saldo = saldo
    }

    get mostrarTitular(){
        return this.titular;
    }

    set modificarTitular(nuevoTitular){
        this.titular = nuevoTitular
    }
    get mostrarSaldo(){
        return this.saldo;
    }

    set modificarSaldo(nuevoSaldo){
        this.titular = nuevoSaldo
    }

    ingresar(monto) {
        this.saldo = monto + this.saldo
        // console.log(monto)
    }

    extraer(cantidad) {
        this.saldo = this.saldo - cantidad
    }

    informar() {
        console.log(`Titular: ${this.titular} Saldo: ${this.saldo}`)
    }
}

let cAlex = new cuenta('Alex',0)
console.log(cAlex)