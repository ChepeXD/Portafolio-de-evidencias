
 // FUNCION 1: RECIBE UN ARREGLO
function sumarArreglo(numeros: number[]): number {
    let suma = 0;

    for (let numero of numeros) {
        suma += numero;
    }

    return suma;
}

// FUNCION 2: UTILIZA PARAMETRO REST
function sumarRest(...numeros: number[]): number {
    let suma = 0;

    for (let numero of numeros) {
        suma += numero;
    }

    return suma;
}

// Los mismos valores para ambas funciones
const valores: number[] = [10, 20, 30, 40];

// Se llama utilizando corchetes porque recibe un arreglo completo
console.log("Suma con arreglo: " + sumarArreglo([10, 20, 30, 40]));

// Se llama utilizando argumentos separados porque utiliza REST
console.log("Suma con REST: " + sumarRest(10, 20, 30, 40));

// OPERADOR SPREAD (...)
// Permite enviar los elementos de un arreglo como argumentos separados
console.log("Suma con SPREAD: " + sumarRest(...valores));
