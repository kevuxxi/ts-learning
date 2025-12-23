//1
class saldoFornite {
    protected pavos: number;

    constructor(
        public titular: string,
        pavosIniciales: number

    ) {
        this.pavos = pavosIniciales
    }

    consultarSaldo(): number {
        return this.pavos
    }
}

class saldoJugador extends saldoFornite {
    aplicarIntereses(porcentaje: number): number {
        return this.pavos += this.pavos * porcentaje
    }
}

const kevuxxi = new saldoJugador('kevuxxi', 100000)
console.log(kevuxxi.consultarSaldo())
console.log(kevuxxi.aplicarIntereses(5))


//2

interface notificacion {
    enviarMensaje(mensaje: string): void;
}

class emailService implements notificacion {
    enviarMensaje(mensaje: string): void {
        console.log('mensaje enviado', mensaje)
    }
}
class smsService implements notificacion {
    enviarMensaje(mensaje: string): void {
        console.log('sms enviado', mensaje)
    }
}

function notificar(servicio: notificacion, mensaje: string) {
    servicio.enviarMensaje(mensaje)
}

notificar(new emailService(), 'hola guapo')
notificar(new smsService(), 'hola guapo')

const xboxMesagge = new emailService();
xboxMesagge.enviarMensaje('hola a todos sin funcion');

//3

interface perros {
    razas(raza: string): string;
}

class mascotaRescatada {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre
    }

}

class registroAdopcion extends mascotaRescatada implements perros {
    razas(raza: string): string {
        return `${this.nombre} es un perro ingresado de raza:${raza}`
    }

}

function informeDeadopcion(registro: perros, raza: string): string {
    return registro.razas(raza)
}


const zeke = new registroAdopcion('zeke');
console.log(zeke.razas('bulldog frances '));

console.log(informeDeadopcion(new registroAdopcion('lana'), 'labrador'))

