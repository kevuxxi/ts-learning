//1
function mensajeParaLaMochi(nombre: string, amor?: number): string {
    return amor
        ? `Animo!!! ${nombre}, tu puedes, por cierto te amo ${amor} 💗💗💗`
        : `Animo!!! ${nombre}, tu puedes!! 💗💗💗💗`
}

console.log(mensajeParaLaMochi('Mochi', 1000000000000000000000000000000000000000000000000000000000))
console.log(mensajeParaLaMochi('Mochi'))

//2

function promedioAmor(nombre: string, ...amor: number[]): string {
    const amorTotal = amor.reduce((a, b) => a + b, 0) / amor.length;
    return `${nombre} tienes un amor promedio de ${amorTotal.toFixed(1)}`;
}


console.log(promedioAmor('Sara', 9, 10, 10, 9, 10, 10, 10, 10, 10))

//3
type Usuario = { id: number; nombre: string; email: string };

function obtenerUsuario(id: number): Usuario;
function obtenerUsuario(email: string): Usuario;
function obtenerUsuario(param: number | string): Usuario {
    if (typeof param === "number") {
        return { id: param, nombre: "Kevin", email: "kevin@pf.com" };
    } else {
        return { id: 1, nombre: "Kevin", email: param };
    }
}

console.log(obtenerUsuario(1));
console.log(obtenerUsuario("kevin@pf.com"));

//4

function log(mensaje: string): void;
function log(error: Error): void;
function log(valor: string | Error): void {
    if (typeof valor === "string") console.log(`📘 Info: ${valor}`);
    else console.error(`❌ Error: ${valor.message}`);
}

log("Servidor iniciado correctamente");
log(new Error("Error de conexión"));







