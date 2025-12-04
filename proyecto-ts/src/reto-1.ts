enum estadoLaboral {
    busquedaActiva = "busqueda_activa",
    empleado = 'empleado',
    abierto = 'abierto_posibilidades'
}

type id = string | number;


interface postulante {
    name: string,
    estado: estadoLaboral,
    id: id
}

const postulantes: postulante[] = [
    { id: 1, name: "Lucía Martínez", estado: estadoLaboral.busquedaActiva },
    { id: 2, name: "Diego Rojas", estado: estadoLaboral.busquedaActiva },
    { id: 3, name: "Valentina Silva", estado: estadoLaboral.abierto },
    { id: 4, name: "Mateo Pérez", estado: estadoLaboral.abierto },
    { id: 5, name: "Camila Soto", estado: estadoLaboral.empleado },
];

const lucia: postulante = { id: 1, name: "Lucía Martínez", estado: estadoLaboral.busquedaActiva }


function publicarPostulante(postulante: postulante): string {
    return `Bienvenido a nuestro portal ${postulante.name}`
}

console.log(publicarPostulante(lucia));


function listaDepostulante(postulantes: postulante[]): string {
    return postulantes.map(postulante => `${postulante.name} Bienvenido, se te ha asignado el id ${postulante.id}, tu estado es el siguiente: ${postulante.estado}`).join("\n");;

}

console.log(listaDepostulante(postulantes));


function cambiarEstado(postulante: postulante, id: number, nuevoEstado: estadoLaboral): postulante | string {
    if (postulante.id === id) {
        postulante.estado = nuevoEstado;
        return postulante;
    } else {
        return `No se encontró el postulante con id ${id}`;
    }
}

console.log(cambiarEstado(lucia, 1, estadoLaboral.empleado));
