//1
function tipoAsignado<T>(valor: T): { value: T } {
    return { value: valor };
}
console.log(tipoAsignado("Kevin"));
console.log(tipoAsignado(27));
console.log(tipoAsignado({ rol: "admin" }));

function username<T>(username: T): void {
    console.log(username)
}
username("Kevin");
username(27);

//2 
function respuestasFormulario<T>(respuestas: T[]): T | any {
    return respuestas;
}
console.log(respuestasFormulario(['kevin', 1, true]))

function firstElement<T>(lista: T[]): T | any {
    return lista[0];
}

firstElement([1, 2, 3]);        // number
firstElement(["a", "b"]);       // string
firstElement([true, false]);    // boolean


function obtenerUltimo<T>(lista: T[]): T | any {
    return lista[lista.length - 1];
}

console.log(obtenerUltimo([1, 2, 3]));
console.log(obtenerUltimo(["a", "b", "c"]));

//3
function imprimirLongitud<T extends { length: number }>(valor: T): void {
    console.log(valor.length);
}

imprimirLongitud("Kevin");      // string tiene length
imprimirLongitud([1, 2, 3]);    // array tiene length
// imprimirLongitud(123); ❌


function mostrarId<T extends { id: number }>(obj: T): void {
    console.log(`ID: ${obj.id}`);
}

mostrarId({ id: 1, nombre: "Kevin" });
mostrarId({ id: 2, activo: true });


function amorContable<T extends { name: string }>(persona: T): T | any {
    return persona.name
}

console.log(amorContable({ name: 'sara', alias: 'mochi' }))

//4
interface ApiResponse<T> {
    status: "success" | "error";
    data: T;
}

function fakeFetch<T>(data: T): Promise<ApiResponse<T>> {
    return Promise.resolve({
        status: "success",
        data,
    });
}

fakeFetch({ id: 1, nombre: "Kevin" }).then(res => {
    console.log(res.data.nombre);
});


