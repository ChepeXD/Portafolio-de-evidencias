
function factorial(numero: number): number {
    if (numero < 0) {
        throw new Error("No se permiten numeros negativos.");
    }

    // Caso base
    if (numero === 0 || numero === 1) {
        return 1;
    }

    // Llamada recursiva
    return numero * factorial(numero - 1);
}

// Prueba
let numero: number = 4;

console.log("Factorial de " + numero + ":");
console.log(factorial(numero));
