//1

interface jugador {
    nombre: string;
    posicion: string;
    goles: number;
    asistencias: number;
    activo: boolean;
    rol?: 'capitan' | 'segundo' | 'regular'
}

const modric: jugador = { nombre: 'luka modric', posicion: 'mediocampista', goles: 79, asistencias: 200, activo: true, rol: 'capitan' }
const cristiano: jugador = { nombre: 'Ronaldo', posicion: 'delantero', goles: 1000, asistencias: 388, activo: true, rol: 'regular' }

console.log(modric)


//2

const plantilla: jugador[] = [modric, { nombre: 'Benzema', posicion: 'delantero', goles: 300, asistencias: 388, activo: true, rol: 'segundo' }, cristiano]

console.log(plantilla)


//3

function listarUsuarios(lista: jugador[]): void {
    lista.forEach(j =>
        console.log(`${j.nombre} (${j.posicion}) - ${j.rol ?? "sin rol"}`)
    );
}
listarUsuarios(plantilla);



function promedioGoles(lista: jugador[]): void {
    let cantidadDeGoles = 0;
    lista.forEach(j => {
        cantidadDeGoles += j.goles;
        console.log(`${j.nombre} (${j.goles})`);
    });
    console.log(` total de goles equipo ${cantidadDeGoles}`);
}

promedioGoles(plantilla);

//4

interface fichaCompleta extends jugador {
    plantilla: string
}

const ficha: fichaCompleta = { ...modric, plantilla: 'equipo a' }


console.log(ficha)




function mostrarFichaCompleta(ficha: fichaCompleta): void {
    console.log(ficha)
}

mostrarFichaCompleta(ficha)


const neymar: fichaCompleta = { nombre: 'Neymar', posicion: 'extremo', goles: 240, asistencias: 200, activo: true, rol: 'regular', plantilla: 'equipo b' }

mostrarFichaCompleta(neymar)

//5



interface producto {
    name: string;
    price: number;
    id: number;
    available: boolean
}

function expensiveProduct(lista: producto[]): producto {
    return lista.reduce((prev, current) =>
        current.price > prev.price ? current : prev
    );
}

const productos: producto[] = [
    { name: "Auriculares inalámbricos", price: 59.99, id: 1, available: true },
    { name: "Teclado mecánico", price: 89.5, id: 2, available: true },
    { name: "Monitor 27\"", price: 249.9, id: 3, available: false },
    { name: "Mouse ergonómico", price: 39.99, id: 4, available: true },
    { name: "Disco SSD 1TB", price: 119.0, id: 5, available: false }
];
console.log(expensiveProduct(productos))


