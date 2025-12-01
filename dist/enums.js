"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1
var Rol;
(function (Rol) {
    Rol["player"] = "player";
    Rol["manager"] = "manager";
    Rol["asistente"] = "asistente";
    Rol["medico"] = "medico";
})(Rol || (Rol = {}));
const empleados = [
    { id: 1, name: "Kevin", rol: Rol.player },
    { id: 2, name: "Wanda", rol: Rol.asistente },
    { id: 3, name: "zeke", rol: Rol.manager },
];
function verificarAcceso(usuario) {
    if (usuario.rol === Rol.manager)
        return "Acceso total 🔓";
    return "Acceso limitado ✏️";
}
empleados.forEach(u => console.log(`${u.name}: ${verificarAcceso(u)}`));
function mostrarEstado(estado) {
    console.log(`el estado es ${estado}`);
}
mostrarEstado('activo');
mostrarEstado('retirado');
mostrarEstado('inactivo');
//3
var evolucion;
(function (evolucion) {
    evolucion["lesionado"] = "lesionado";
    evolucion["recuperado"] = "recuperado";
    evolucion["favorable"] = "favorable";
    evolucion["retroceso"] = "retroceso";
})(evolucion || (evolucion = {}));
const plantillaImportanInfo = [
    {
        id: 1,
        name: "Vinicius Jr",
        rol: Rol.player,
        status: 'activo',
        evolucion: evolucion.favorable,
        protocolo: 'descarga'
    },
    {
        id: 2,
        name: "Jude Bellingham",
        rol: Rol.player,
        status: 'activo',
        evolucion: evolucion.recuperado,
        protocolo: 'muscular'
    },
    {
        id: 3,
        name: "Kylian Mbappé",
        rol: Rol.player,
        status: 'activo',
        evolucion: evolucion.favorable,
        protocolo: 'descarga'
    },
    {
        id: 4,
        name: "Thibaut Courtois",
        rol: Rol.player,
        status: 'activo',
        evolucion: evolucion.recuperado,
        protocolo: 'fractura'
    },
    {
        id: 5,
        name: "Luka Modrić",
        rol: Rol.player,
        status: 'activo',
        evolucion: evolucion.favorable,
        protocolo: 'descarga'
    },
    {
        id: 6,
        name: "Eduardo Camavinga",
        rol: Rol.player,
        status: 'activo',
        evolucion: evolucion.lesionado,
        protocolo: 'muscular'
    },
    {
        id: 7,
        name: "Federico Valverde",
        rol: Rol.player,
        status: 'activo',
        evolucion: evolucion.favorable,
        protocolo: 'descarga'
    },
    {
        id: 8,
        name: "Antonio Rüdiger",
        rol: Rol.player,
        status: 'activo',
        evolucion: evolucion.favorable,
        protocolo: 'descarga'
    },
    {
        id: 9,
        name: "David Alaba",
        rol: Rol.player,
        status: 'inactivo',
        evolucion: evolucion.retroceso,
        protocolo: 'fractura'
    },
    {
        id: 10,
        name: "Dani Carvajal",
        rol: Rol.player,
        status: 'inactivo',
        evolucion: evolucion.lesionado,
        protocolo: 'fractura'
    }
];
plantillaImportanInfo.forEach(player => console.log(`${player.name},${player.status},${player.evolucion},${player.protocolo}: ${verificarAcceso(player)}`));
//# sourceMappingURL=enums.js.map