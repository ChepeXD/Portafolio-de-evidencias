
// ==========================================
// SESION 23 - EJERCICIO 4
// ORGANIZACION DE SOLICITUDES DE SOPORTE
// ==========================================

interface Solicitud {
    id: number;
    nombreEstudiante: string;
    problema: string;
}

// Solicitudes iniciales
let solicitudes: Solicitud[] = [
    { id: 1, nombreEstudiante: "Carlos", problema: "Problema con internet" },
    { id: 2, nombreEstudiante: "Ana", problema: "Error de impresora" },
    { id: 3, nombreEstudiante: "Pedro", problema: "Computadora lenta" },
    { id: 4, nombreEstudiante: "Maria", problema: "Error de software" }
];

console.log("===== SOLICITUDES INICIALES =====");
console.log(solicitudes);

// Agregar solicitud al final con push()
solicitudes.push({
    id: 5,
    nombreEstudiante: "Luis",
    problema: "Problema con teclado"
});

// Agregar solicitud urgente al inicio con unshift()
solicitudes.unshift({
    id: 6,
    nombreEstudiante: "Roberto",
    problema: "Equipo no enciende - URGENTE"
});

console.log("===== SOLICITUDES AGREGADAS =====");
console.log(solicitudes);

// Atender primera solicitud con shift()
let atendida: Solicitud | undefined = solicitudes.shift();

if (atendida !== undefined) {
    console.log("Solicitud atendida:", atendida.nombreEstudiante);
} else {
    console.log("No hay solicitudes pendientes.");
}

// Retirar ultima solicitud con pop()
let retirada: Solicitud | undefined = solicitudes.pop();

if (retirada !== undefined) {
    console.log("Solicitud retirada:", retirada.nombreEstudiante);
} else {
    console.log("No hay solicitudes para retirar.");
}

// Insertar solicitud prioritaria en indice 1
solicitudes.splice(1, 0, {
    id: 7,
    nombreEstudiante: "Sofia",
    problema: "Falla en sistema universitario - PRIORIDAD"
});

console.log("===== SOLICITUD PRIORITARIA AGREGADA =====");
console.log(solicitudes);

// Retirar solicitud del indice 3
let derivada: Solicitud | undefined = solicitudes.splice(3, 1)[0];

if (derivada !== undefined) {
    console.log("Solicitud derivada a otro tecnico:", derivada.nombreEstudiante);
}

// Obtener las proximas dos solicitudes con slice()
let proximas: Solicitud[] = solicitudes.slice(0, 2);

console.log("===== PROXIMAS DOS SOLICITUDES =====");
console.log(proximas);

// Mostrar fila completa
console.log("===== FILA COMPLETA =====");
console.log(solicitudes);

// Comprobar que slice() no modifico el arreglo
console.log("Cantidad de solicitudes en la fila:", solicitudes.length);
console.log("Cantidad de solicitudes en la seleccion:", proximas.length);
