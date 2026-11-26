
interface Taller {
    id: number;
    nombre: string;
    costo: number;
    cuposDisponibles: number;
}

interface Inscripcion {
    tallerId: number;
    cantidad: number;
}

// Catalogo inicial con cuatro talleres
const talleres: Taller[] = [
    { id: 1, nombre: "Programacion Web", costo: 25, cuposDisponibles: 20 },
    { id: 2, nombre: "Base de Datos", costo: 30, cuposDisponibles: 15 },
    { id: 3, nombre: "Ciberseguridad", costo: 40, cuposDisponibles: 0 },
    { id: 4, nombre: "Redes Informaticas", costo: 35, cuposDisponibles: 10 }
];

// Agregar un nuevo taller con push
talleres.push({
    id: 5,
    nombre: "Desarrollo de Aplicaciones",
    costo: 45,
    cuposDisponibles: 12
});

// Obtener talleres con cupos disponibles mediante filter
const talleresDisponibles = talleres.filter(taller => taller.cuposDisponibles > 0);

console.log("TALLERES DISPONIBLES:");
console.log(talleresDisponibles);

// Buscar taller por identificador con find
function buscarTaller(id: number): Taller | undefined {
    return talleres.find(taller => taller.id === id);
}

// Simular inscripciones a dos talleres
const inscripciones: Inscripcion[] = [
    { tallerId: 1, cantidad: 3 },
    { tallerId: 2, cantidad: 2 }
];

// Generar resumen mediante map
const resumen = inscripciones.map(inscripcion => {
    const taller = buscarTaller(inscripcion.tallerId);

    if (taller !== undefined) {
        return {
            nombre: taller.nombre,
            participantes: inscripcion.cantidad,
            subtotal: taller.costo * inscripcion.cantidad
        };
    }

    return {
        nombre: "Taller no encontrado",
        participantes: inscripcion.cantidad,
        subtotal: 0
    };
});

// Calcular total con reduce
const total = resumen.reduce((acumulador, inscripcion) => {
    return acumulador + inscripcion.subtotal;
}, 0);

// Actualizar cupos con forEach
inscripciones.forEach(inscripcion => {
    const taller = buscarTaller(inscripcion.tallerId);

    if (taller !== undefined) {
        taller.cuposDisponibles =
            taller.cuposDisponibles - inscripcion.cantidad;
    }
});

// Mostrar resumen de inscripciones
console.log("\nRESUMEN DE INSCRIPCIONES:");

resumen.forEach(inscripcion => {
    console.log(
        inscripcion.nombre +
        " | Participantes: " + inscripcion.participantes +
        " | Subtotal: $" + inscripcion.subtotal.toFixed(2)
    );
});

// Mostrar total
console.log("\nTOTAL A PAGAR: $" + total.toFixed(2));

// Mostrar cupos restantes
console.log("\nCUPOS RESTANTES:");

talleres.forEach(taller => {
    console.log(
        taller.nombre + ": " + taller.cuposDisponibles + " cupos"
    );
});
