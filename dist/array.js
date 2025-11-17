"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1
const edades = [30, 26, 53];
const nombres = ['kevin', 'sara', 'juster'];
function promedio(edades) {
    return edades.reduce((a, b) => a + b, 0) / edades.length;
}
console.log(`Promedio de edades: ${promedio(edades)}`);
const ronaldo = ['ronaldo', 1000];
function mostrarEstadisticas(jugadores) {
    jugadores.forEach(([nombre, goles]) => console.log(`${nombre} marcó ${goles} goles.`));
}
mostrarEstadisticas([ronaldo, ["Mbappé", 28], ["Haaland", 33]]);
const maracay = ['maracay', 'venezuela', 30.000];
//# sourceMappingURL=array.js.map