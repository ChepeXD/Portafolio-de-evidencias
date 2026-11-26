
function fibonacci(posicion: number): number {
    if (posicion < 0) {
        throw new Error("No se permiten posiciones negativas.");
    }

    // Casos base
    if (posicion === 0) {
        return 0;
    }

    if (posicion === 1) {
        return 1;
    }

    // Llamadas recursivas
    return fibonacci(posicion - 1) + fibonacci(posicion - 2);
}

// Mostrar los primeros N terminos
let cantidad: number = 7;

if (cantidad < 0) {
    console.log("La cantidad no puede ser negativa.");
} else {
    console.log("Primeros " + cantidad + " terminos de Fibonacci:");

    for (let i = 0; i < cantidad; i++) {
        console.log(fibonacci(i));
    }
}
