"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1
class saldoFornite {
    titular;
    pavos;
    constructor(titular, pavosIniciales) {
        this.titular = titular;
        this.pavos = pavosIniciales;
    }
    consultarSaldo() {
        return this.pavos;
    }
}
class saldoJugador extends saldoFornite {
    aplicarIntereses(porcentaje) {
        return this.pavos += this.pavos * porcentaje;
    }
}
const kevuxxi = new saldoJugador('kevuxxi', 100000);
console.log(kevuxxi.consultarSaldo());
console.log(kevuxxi.aplicarIntereses(5));
class emailService {
    enviarMensaje(mensaje) {
        console.log('mensaje enviado', mensaje);
    }
}
class smsService {
    enviarMensaje(mensaje) {
        console.log('sms enviado', mensaje);
    }
}
function notificar(servicio, mensaje) {
    servicio.enviarMensaje(mensaje);
}
notificar(new emailService(), 'hola guapo');
notificar(new smsService(), 'hola guapo');
const xboxMesagge = new emailService();
xboxMesagge.enviarMensaje('hola a todos sin funcion');
class mascotaRescatada {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class registroAdopcion extends mascotaRescatada {
    razas(raza) {
        return `${this.nombre} es un perro ingresado de raza:${raza}`;
    }
}
function informeDeadopcion(registro, raza) {
    return registro.razas(raza);
}
const zeke = new registroAdopcion('zeke');
console.log(zeke.razas('bulldog frances '));
console.log(informeDeadopcion(new registroAdopcion('lana'), 'labrador'));
//# sourceMappingURL=herencia.js.map