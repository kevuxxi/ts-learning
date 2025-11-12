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