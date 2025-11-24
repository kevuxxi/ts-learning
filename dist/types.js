"use strict";
//1
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarResultado(resul) {
    if (typeof resul === 'number') {
        console.log(`resultado numerico ${resul.toFixed(2)}`);
    }
    else {
        console.log(`resultado textual ${resul.toUpperCase()}`);
    }
}
mostrarResultado('kevin');
mostrarResultado(10);
const cristiano = {
    nombre: 'Cristiano Ronaldo',
    edad: 40,
    seleccion: 'Portugal',
    club: 'Real Madrid',
    numero: 7,
};
function mostrarJugador(jugador) {
    console.log(jugador);
}
mostrarJugador(cristiano);
function handelApiResponse(API) {
    if (API.status === 'success') {
        console.log(`operacion exitosa, ${API.data}`);
    }
    else {
        console.log(`error al cargar los datos, ${API.message} `);
    }
}
handelApiResponse({ status: "success", data: "Todo salió bien" });
handelApiResponse({ status: "error", message: "Hubo un fallo" });
//# sourceMappingURL=types.js.map