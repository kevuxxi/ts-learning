"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1
function tipoAsignado(valor) {
    return { value: valor };
}
console.log(tipoAsignado("Kevin"));
console.log(tipoAsignado(27));
console.log(tipoAsignado({ rol: "admin" }));
function username(username) {
    console.log(username);
}
username("Kevin");
username(27);
//2 
function respuestasFormulario(respuestas) {
    return respuestas;
}
console.log(respuestasFormulario(['kevin', 1, true]));
function firstElement(lista) {
    return lista[0];
}
firstElement([1, 2, 3]); // number
firstElement(["a", "b"]); // string
firstElement([true, false]); // boolean
function obtenerUltimo(lista) {
    return lista[lista.length - 1];
}
console.log(obtenerUltimo([1, 2, 3]));
console.log(obtenerUltimo(["a", "b", "c"]));
//1
function imprimirLongitud(valor) {
    console.log(valor.length);
}
imprimirLongitud("Kevin"); // string tiene length
imprimirLongitud([1, 2, 3]); // array tiene length
// imprimirLongitud(123); ❌
function mostrarId(obj) {
    console.log(`ID: ${obj.id}`);
}
mostrarId({ id: 1, nombre: "Kevin" });
mostrarId({ id: 2, activo: true });
function amorContable(persona) {
    return persona.name;
}
console.log(amorContable({ name: 'sara', alias: 'mochi' }));
//# sourceMappingURL=generics.js.map