
export {};

const notas: number[] = [8.5, 5.0, 7.0, 4.5, 9.0, 6.0, 3.5];

let aprobados = 0;

for (const nota of notas) {
    if (nota >= 6.0) {
        aprobados++;
    }
}

console.log("REGISTRO DE NOTAS:");
console.log("Total de estudiantes: " + notas.length);
console.log("Estudiantes aprobados: " + aprobados);
console.log("Estudiantes reprobados: " + (notas.length - aprobados));
