//1

type resultado = string | number;

function mostrarResultado(resul: resultado): void {
    if (typeof resul === 'number') {
        console.log(`resultado numerico ${resul.toFixed(2)}`)
    } else {
        console.log(`resultado textual ${resul.toUpperCase()}`)
    }
}

mostrarResultado('kevin');
mostrarResultado(10);


//2


type dorsal = { numero: number; }

type player = {
    nombre: string;
    edad: number;
}

type combinados = {
    seleccion: string;
    club: string;
}

type playerInfo = player & combinados & dorsal;


const cristiano: playerInfo = {
    nombre: 'Cristiano Ronaldo',
    edad: 40,
    seleccion: 'Portugal',
    club: 'Real Madrid',
    numero: 7,
}

function mostrarJugador(jugador: playerInfo): void {
    console.log(jugador)
}

mostrarJugador(cristiano);

//3

type success = { status: 'success'; data: string }
type error = { status: 'error'; message: string }

type APIResponse = success | error

function handelApiResponse(API: APIResponse) {
    if (API.status === 'success') {
        console.log(`operacion exitosa, ${API.data}`)
    } else {
        console.log(`error al cargar los datos, ${API.message} `)
    }
}

handelApiResponse({ status: "success", data: "Todo salió bien" });
handelApiResponse({ status: "error", message: "Hubo un fallo" });