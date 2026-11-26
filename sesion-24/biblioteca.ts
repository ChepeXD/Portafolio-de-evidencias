
export {};

interface SolicitudPrestamo {
    id: number;
    estudiante: string;
    libro: string;
    categoria: string;
}

// 1. Representar las solicitudes
const solicitudes: SolicitudPrestamo[] = [
    {
        id: 1,
        estudiante: "Carlos Perez",
        libro: "Introduccion a TypeScript",
        categoria: "Tecnologia"
    },
    {
        id: 2,
        estudiante: "Maria Lopez",
        libro: "Historia de El Salvador",
        categoria: "Historia"
    },
    {
        id: 3,
        estudiante: "Jose Ramirez",
        libro: "Redes de Computadoras",
        categoria: "Tecnologia"
    }
];

console.log("LISTA INICIAL DE SOLICITUDES:");
console.log(solicitudes);

// 2. Registrar y atender solicitudes

// Agregar una solicitud al final con push
solicitudes.push({
    id: 4,
    estudiante: "Ana Martinez",
    libro: "Base de Datos",
    categoria: "Tecnologia"
});

// Agregar una solicitud prioritaria al inicio con unshift
solicitudes.unshift({
    id: 5,
    estudiante: "Pedro Gonzalez",
    libro: "Programacion en Java",
    categoria: "Tecnologia"
});

// Mostrar orden antes de atender
console.log("\nSOLICITUDES ANTES DE ATENDER:");
console.log(solicitudes);

// Retirar la primera solicitud con shift
const atendida = solicitudes.shift();

// Comprobar si existe la solicitud atendida
if (atendida !== undefined) {
    console.log("\nSOLICITUD ATENDIDA:");
    console.log("Estudiante: " + atendida.estudiante);
    console.log("Libro: " + atendida.libro);
} else {
    console.log("\nNo hay solicitudes para atender.");
}

// 3. Consultar solicitudes pendientes

// Buscar una solicitud existente con find
const buscarExistente = solicitudes.find(s => s.id === 2);

if (buscarExistente !== undefined) {
    console.log("\nSOLICITUD ENCONTRADA:");
    console.log(buscarExistente);
} else {
    console.log("\nNo se encontro la solicitud.");
}

// Buscar una solicitud inexistente con find
const buscarInexistente = solicitudes.find(s => s.id === 10);

if (buscarInexistente !== undefined) {
    console.log("\nSOLICITUD ENCONTRADA:");
    console.log(buscarInexistente);
} else {
    console.log("\nNo existe una solicitud con ese identificador.");
}

// Filtrar solicitudes de Tecnologia
const solicitudesTecnologia = solicitudes.filter(
    s => s.categoria === "Tecnologia"
);

console.log("\nSOLICITUDES PENDIENTES DE TECNOLOGIA:");
console.log(solicitudesTecnologia);

// 4. Comprobar los resultados

// Mostrar arreglo final
console.log("\nLISTA FINAL DE SOLICITUDES:");
console.log(solicitudes);

// Mostrar cantidad de solicitudes pendientes
console.log("\nCANTIDAD DE SOLICITUDES PENDIENTES:");
console.log(solicitudes.length);

// Comparar cantidad antes y despues del filtro
const cantidadAntesFiltro = solicitudes.length;
const cantidadDespuesFiltro = solicitudesTecnologia.length;

console.log("\nCOMPARACION DEL FILTRO:");
console.log("Solicitudes originales: " + cantidadAntesFiltro);
console.log("Solicitudes filtradas: " + cantidadDespuesFiltro);

// Explicar si el filtro modifico el arreglo original
console.log("\nEXPLICACION:");

if (cantidadAntesFiltro === cantidadDespuesFiltro) {
    console.log("El filtro no retiro solicitudes del arreglo original.");
} else {
    console.log("El filtro obtuvo una lista nueva con menos elementos, pero no modifico el arreglo original.");
}
