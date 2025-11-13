"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//caso donde la funcion no retorna nada 
function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}
const saludar = (nombre) => {
    return `hola ${nombre}, bienvenido a TypeScript`;
};
console.log(saludar('kevin'));
const sumar = (primero, segundo) => {
    return primero + segundo;
};
console.log(sumar(1, 18));
const verdad = true;
console.log(verdad);
let datos = ['kevin', true, 19];
console.log(datos);
let lista = [1, 2, 3];
console.log(lista);
let nombre = 'kevin';
let edad = 30;
let esdesarrollador = true;
function presentar(nombre, edad, dev) {
    const rol = dev ? 'desarrollador' : 'aficionado';
    return `hola soy ${nombre}, tengo ${edad} años de edad, soy ${rol}`;
}
console.log(presentar(nombre, edad, esdesarrollador));
function calcular(peso, altura) {
    let imc = peso / altura;
    let formateImc = Math.round(imc * 100) / 100;
    return formateImc;
}
console.log(calcular(61, 171));
//# sourceMappingURL=index.js.map