"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1
class alumno {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `hola soy ${this.nombre} y tengo ${this.edad} años de edad`;
    }
}
const kevin = new alumno('kevin', 30);
console.log(kevin.presentarse());
//2
class mecardoPago {
    titular;
    saldo;
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    depositar(monto) {
        if (monto <= 0)
            throw new Error("Monto inválido");
        return this.saldo += monto;
    }
    retirar(monto) {
        if (monto > this.saldo)
            throw new Error("Saldo insuficiente");
        return this.saldo -= monto;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
const kevinAcount = new mecardoPago('Kevin Marquez', 1000000);
console.log(kevinAcount.depositar(243535));
console.log(kevinAcount.retirar(243535));
console.log(kevinAcount.depositar(235));
console.log(kevinAcount.consultarSaldo());
const cuenta = new mecardoPago("Saile Rojas", 1000);
cuenta.depositar(500);
cuenta.retirar(300);
console.log(cuenta.consultarSaldo());
//3
class logger {
    logs = [];
    log(mensaje) {
        this.logs.push(mensaje);
    }
    listarlog() {
        this.logs.forEach(log => console.log(log));
    }
}
const kevinLogs = new logger;
kevinLogs.log('hola bebe');
kevinLogs.log('Mochi te amo');
kevinLogs.log('te amo');
kevinLogs.log('amandote');
kevinLogs.log('mentira');
kevinLogs.listarlog();
//# sourceMappingURL=clases.js.map