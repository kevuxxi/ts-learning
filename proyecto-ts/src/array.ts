//1
const edades: number[] = [30, 26, 53];
const nombres: string[] = ['kevin', 'sara', 'juster']

function promedio(edades: number[]): number {
    return edades.reduce((a, b) => a + b, 0) / edades.length;
}

console.log(`Promedio de edades: ${promedio(edades)}`);

//2

type jugador = [nombre: string, goles: number];

const ronaldo: jugador = ['ronaldo', 1000];

function mostrarEstadisticas(jugadores: jugador[]): void {
    jugadores.forEach(([nombre, goles]) => console.log(`${nombre} marcó ${goles} goles.`))
}

mostrarEstadisticas([ronaldo, ["Mbappé", 28], ["Haaland", 33]]);

//3

type ciudad = [nombre: string, pais: string, habitantes: number];

const maracay: ciudad = ['maracay', 'venezuela', 30.000]