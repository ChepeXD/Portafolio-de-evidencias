
export {};

const estudiantes: string[] = [
    "Carlos Perez",
    "Maria Lopez",
    "Jose Ramirez",
    "Ana Martinez",
    "Pedro Gonzalez"
];

console.log("LISTADO DE ESTUDIANTES:");

for (let i = 0; i < estudiantes.length; i++) {
    console.log("Estudiante #" + (i + 1) + ": " + estudiantes[i]);
}
