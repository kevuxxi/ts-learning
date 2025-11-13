
//caso donde la funcion no retorna nada 
function saludo(nombre: string): void {
    console.log(`Hola ${nombre}`);
}


const saludar = (nombre: string): string => {
    return `hola ${nombre}, bienvenido a TypeScript`
}
console.log(saludar('kevin'));

const sumar = (primero: number, segundo: number): number => {
    return primero + segundo;
}
console.log(sumar(1, 18));

const verdad: boolean = true;
console.log(verdad)

type mixto = string | number | boolean;
let datos: mixto[] = ['kevin', true, 19]
console.log(datos)

let lista: number[] = [1, 2, 3]
console.log(lista)



let nombre: string = 'kevin';
let edad: number = 30;
let esdesarrollador: boolean = true;


function presentar(nombre: string, edad: number, dev: boolean): string {
    const rol = dev ? 'desarrollador' : 'aficionado'
    return `hola soy ${nombre}, tengo ${edad} años de edad, soy ${rol}`
}

console.log(presentar(nombre, edad, esdesarrollador));



function calcular(peso: number, altura: number): number {
    let imc = peso / altura
    let formateImc = Math.round(imc * 100) / 100;
    return formateImc
}

console.log(calcular(61, 171));