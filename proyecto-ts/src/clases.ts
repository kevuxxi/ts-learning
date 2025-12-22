//1
class alumno {
    constructor(
        public nombre: string,
        public edad: number,
    ) { }

    presentarse(): string {
        return `hola soy ${this.nombre} y tengo ${this.edad} años de edad`
    }
}

const kevin = new alumno('kevin', 30);

console.log(kevin.presentarse());

//2

class mecardoPago {
    private saldo: number;
    constructor(
        public titular: string,
        saldoInicial: number
    ) {
        this.saldo = saldoInicial
    }
    depositar(monto: number): number {
        if (monto <= 0) throw new Error("Monto inválido");
        return this.saldo += monto
    }

    retirar(monto: number): number {
        if (monto > this.saldo) throw new Error("Saldo insuficiente");
        return this.saldo -= monto
    }
    consultarSaldo(): number {
        return this.saldo
    }
}

const kevinAcount = new mecardoPago('Kevin Marquez', 1000000)
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
    private logs: string[] = [];

    log(mensaje: string): void {
        this.logs.push(mensaje);
    }

    listarlog(): void {
        this.logs.forEach(log => console.log(log));
    }
}

const kevinLogs = new logger
kevinLogs.log('hola bebe');
kevinLogs.log('Mochi te amo');
kevinLogs.log('te amo');
kevinLogs.log('amandote');
kevinLogs.log('mentira');

kevinLogs.listarlog();

