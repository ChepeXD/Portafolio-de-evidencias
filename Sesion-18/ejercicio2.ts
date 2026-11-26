
function ahorroAcumulado(dias: number): number {
    if (dias < 0) {
        throw new Error("La cantidad de dias no puede ser negativa.");
    }

    // Caso base
    if (dias === 0) {
        return 0;
    }

    // Llamada recursiva
    return dias + ahorroAcumulado(dias - 1);
}

// Prueba
let dias: number = 5;

console.log("Ahorro acumulado en " + dias + " dias:");
console.log("$" + ahorroAcumulado(dias));
