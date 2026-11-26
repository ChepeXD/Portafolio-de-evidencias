
// Ejercicio 5: Funcion segura vs. funcion con efecto secundario

// Lista original de precios
let precios: number[] = [10.00, 15.50, 20.00, 25.75, 30.00];

// ALTERNATIVA A: Funcion que modifica el arreglo original
function aumentarPrecios(lista: number[]): void {
    for (let i = 0; i < lista.length; i++) {
        lista[i] = lista[i]! + 0.25;
    }
}

// ALTERNATIVA B: Funcion que crea una copia y modifica la copia
function obtenerPreciosAumentados(lista: number[]): number[] {
    let nuevosPrecios: number[] = lista.slice();

    for (let i = 0; i < nuevosPrecios.length; i++) {
        nuevosPrecios[i] = nuevosPrecios[i]! + 0.25;
    }

    return nuevosPrecios;
}

// Mostrar precios originales
console.log("===== PRECIOS ORIGINALES =====");
console.log(precios);

// Probar alternativa A
aumentarPrecios(precios);

console.log("===== ALTERNATIVA A =====");
console.log("Precios modificados directamente:");
console.log(precios);

// Reiniciar los precios originales para la prueba B
precios = [10.00, 15.50, 20.00, 25.75, 30.00];

// Probar alternativa B
let resultado: number[] = obtenerPreciosAumentados(precios);

console.log("===== ALTERNATIVA B =====");
console.log("Precios originales:");
console.log(precios);

console.log("Precios aumentados:");
console.log(resultado);

// Comparacion final
console.log("===== COMPARACION =====");
console.log("Alternativa A modifica el arreglo original.");
console.log("Alternativa B conserva el arreglo original.");
