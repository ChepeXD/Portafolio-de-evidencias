
function ahorro(dias: number): number {
    if (dias < 0) {
        throw new Error("No se permiten días negativos");
    }

    // Caso base
    if (dias === 0) {
        return 0;
    }

    // Llamada recursiva
    return dias + ahorro(dias - 1);
}

console.log("Ejercicio 2");
console.log("El ahorro de 5 días es:", ahorro(5), "dólares");