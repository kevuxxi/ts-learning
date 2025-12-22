"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1
function mensajeParaLaMochi(nombre, amor) {
    return amor
        ? `Animo!!! ${nombre}, tu puedes, por cierto te amo ${amor} 💗💗💗`
        : `Animo!!! ${nombre}, tu puedes!! 💗💗💗💗`;
}
console.log(mensajeParaLaMochi('Mochi', 1000000000000000000000000000000000000000000000000000000000));
console.log(mensajeParaLaMochi('Mochi'));
//2
function promedioAmor(nombre, ...amor) {
    const amorTotal = amor.reduce((a, b) => a + b, 0) / amor.length;
    return `${nombre} tienes un amor promedio de ${amorTotal.toFixed(1)}`;
}
console.log(promedioAmor('Sara', 9, 10, 10, 9, 10, 10, 10, 10, 10));
function obtenerUsuario(param) {
    if (typeof param === "number") {
        return { id: param, nombre: "Kevin", email: "kevin@pf.com" };
    }
    else {
        return { id: 1, nombre: "Kevin", email: param };
    }
}
console.log(obtenerUsuario(1));
console.log(obtenerUsuario("kevin@pf.com"));
function log(valor) {
    if (typeof valor === "string")
        console.log(`📘 Info: ${valor}`);
    else
        console.error(`❌ Error: ${valor.message}`);
}
log("Servidor iniciado correctamente");
log(new Error("Error de conexión"));
//# sourceMappingURL=funciones.js.map