
// ==========================================
// SESION 23 - EJERCICIO 2
// GESTION DE TURNOS DE PACIENTES
// ==========================================

interface Paciente {
    identificador: number;
    nombre: string;
    motivo: string;
}

// Lista inicial de pacientes
let pacientes: Paciente[] = [
    { identificador: 1, nombre: "Carlos", motivo: "Gripe" },
    { identificador: 2, nombre: "Ana", motivo: "Dolor de cabeza" },
    { identificador: 3, nombre: "Pedro", motivo: "Fiebre" },
    { identificador: 4, nombre: "Maria", motivo: "Consulta general" }
];

console.log("===== COLA INICIAL =====");
console.log(pacientes);

// Agregar paciente al final con push()
pacientes.push({
    identificador: 5,
    nombre: "Luis",
    motivo: "Dolor muscular"
});

// Agregar emergencia al inicio con unshift()
pacientes.unshift({
    identificador: 6,
    nombre: "Roberto",
    motivo: "Emergencia"
});

console.log("===== PACIENTES AGREGADOS =====");
console.log(pacientes);

// Atender al primer paciente con shift()
let atendido: Paciente | undefined = pacientes.shift();

if (atendido !== undefined) {
    console.log("Paciente atendido:", atendido.nombre);
} else {
    console.log("No hay pacientes para atender.");
}

// Retirar al ultimo paciente con pop()
let cancelado: Paciente | undefined = pacientes.pop();

if (cancelado !== undefined) {
    console.log("Turno cancelado:", cancelado.nombre);
} else {
    console.log("No hay turnos para cancelar.");
}

// Insertar paciente preferencial con splice()
pacientes.splice(1, 0, {
    identificador: 7,
    nombre: "Sofia",
    motivo: "Atencion preferencial"
});

console.log("===== PACIENTE PREFERENCIAL AGREGADO =====");
console.log(pacientes);

// Retirar paciente del indice 2
let derivado: Paciente | undefined = pacientes.splice(2, 1)[0];

if (derivado !== undefined) {
    console.log("Paciente derivado:", derivado.nombre);
}

// Obtener los proximos dos pacientes con slice()
let proximos: Paciente[] = pacientes.slice(0, 2);

console.log("===== PROXIMOS DOS PACIENTES =====");
console.log(proximos);

console.log("===== COLA COMPLETA =====");
console.log(pacientes);
