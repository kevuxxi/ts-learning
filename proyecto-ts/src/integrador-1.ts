//1 
let usuario: string = 'kevin';
let id: number = 10;
let activo: boolean = false

function userStatus(usuario: string, id: number, status: boolean): string {
    if (status) { return `El usuario ${usuario} de ID: ${id}, se encuentra activo` };
    return `El usuario ${usuario} de ID: ${id}, se encuentra inactivo`
}

console.log(userStatus(usuario, id, activo));

//2

const anotaciones: number[] = [10, 20, 2, 3, 12, 9, 0, 10]

type playerStats = [nombre: string, anotaciones: number]

const kevinStats: playerStats = ['kevuxxi', 10];

function promedioAnotaciones(anotaciones: number[]): number {
    let suma = anotaciones.reduce((anotacion, num) => anotacion + num, 0)
    return suma / anotaciones.length
}

console.log(promedioAnotaciones(anotaciones))


//3 

interface luchador {
    name: string;
    power: number;
    type: 'magician' | 'fighter' | 'inteligence';
    active?: boolean;
}

const kevuxxi: luchador = { name: 'kevuxxi', power: 10000000, type: 'magician' };
const Wandix: luchador = { name: 'Wandix', power: 120000000, type: 'fighter', active: true };

function showFighter(fighter: luchador): string {
    if (fighter.active) return `has elegido al amor de mi vida, ${fighter.name}, tiene un poder devastador de ${fighter.power} y es de tipo ${fighter.type}`;
    return `has elegido a ${fighter.name}, tiene un poder devastador de ${fighter.power} y es de tipo ${fighter.type}`
}

console.log(showFighter(kevuxxi))
console.log(showFighter(Wandix))

//4


type username = string | number;

type correo = { correo: string }
type usuario = { name: username, id: number }


type userInfo = correo & usuario;


const user: userInfo = { correo: 'kevin@taltal.com', name: 120303030, id: 1 };


//5

enum powerType {
    magician = 'magician',
    fighter = 'fighter',
    inteligence = 'inteligence'
}

type status = 'active' | 'inactive'

interface playerRol {
    name: string;
    power: powerType;
    estado?: status
}

const kevin: playerRol = { name: 'kevuxxi', power: powerType.magician }
const sara: playerRol = { name: 'Wandix', power: powerType.fighter }

function detallePlayer(player: playerRol): string {
    if (player.power === 'magician') return `${player.name} has decidido ser un mago poderoso`;
    if (player.power === 'fighter') return `${player.name} has decidido ser un peleador poderoso`;
    return `${player.name} has decidido ser un erudito poderoso`
}

console.log(detallePlayer(kevin))
console.log(detallePlayer(sara))

