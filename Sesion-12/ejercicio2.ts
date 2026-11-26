
function calcularPromedio(...notas: number[]): number {
    if (notas.length === 0) {
        return 0;
    }

    let suma = 0;

    for (let nota of notas) {
        suma += nota;
    }

    return suma / notas.length;
}

// Pruebas
console.log("Promedio 1: " + calcularPromedio(8, 9, 10));
console.log("Promedio 2: " + calcularPromedio(7, 8, 9, 10));
console.log("Promedio 3: " + calcularPromedio());
