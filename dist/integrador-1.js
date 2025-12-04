"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1 
let usuario = 'kevin';
let id = 10;
let activo = false;
function userStatus(usuario, id, status) {
    if (status) {
        return `El usuario ${usuario} de ID: ${id}, se encuentra activo`;
    }
    ;
    return `El usuario ${usuario} de ID: ${id}, se encuentra inactivo`;
}
console.log(userStatus(usuario, id, activo));
//2
const anotaciones = [10, 20, 2, 3, 12, 9, 0, 10];
const kevinStats = ['kevuxxi', 10];
function promedioAnotaciones(anotaciones) {
    let suma = anotaciones.reduce((anotacion, num) => anotacion + num, 0);
    return suma / anotaciones.length;
}
console.log(promedioAnotaciones(anotaciones));
const kevuxxi = { name: 'kevuxxi', power: 10000000, type: 'magician' };
const Wandix = { name: 'Wandix', power: 120000000, type: 'fighter', active: true };
function showFighter(fighter) {
    if (fighter.active)
        return `has elegido al amor de mi vida, ${fighter.name}, tiene un poder devastador de ${fighter.power} y es de tipo ${fighter.type}`;
    return `has elegido a ${fighter.name}, tiene un poder devastador de ${fighter.power} y es de tipo ${fighter.type}`;
}
console.log(showFighter(kevuxxi));
console.log(showFighter(Wandix));
const user = { correo: 'kevin@taltal.com', name: 120303030, id: 1 };
//5
var powerType;
(function (powerType) {
    powerType["magician"] = "magician";
    powerType["fighter"] = "fighter";
    powerType["inteligence"] = "inteligence";
})(powerType || (powerType = {}));
const kevin = { name: 'kevuxxi', power: powerType.magician };
const sara = { name: 'Wandix', power: powerType.fighter };
function detallePlayer(player) {
    if (player.power === 'magician')
        return `${player.name} has decidido ser un mago poderoso`;
    if (player.power === 'fighter')
        return `${player.name} has decidido ser un peleador poderoso`;
    return `${player.name} has decidido ser un erudito poderoso`;
}
console.log(detallePlayer(kevin));
console.log(detallePlayer(sara));
//# sourceMappingURL=integrador-1.js.map