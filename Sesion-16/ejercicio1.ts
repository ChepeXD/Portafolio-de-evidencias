let array: number[] = [5, 12, 8, 20, 7, 15, 30, 9];

// Ejercicio 1: Verificar si un número existe
function verificarNumero(numero: number, arreglo: number[]): void {
    if (arreglo.includes(numero)) {
        console.log(`El número ${numero} se encuentra en el arreglo.`);
    } else {
        console.log(`El número ${numero} no se encuentra en el arreglo.`);
    }
}

verificarNumero(20, array);

// Ejercicio 2: Verificar la posición de un número
function verificarPosicion(numero: number, arreglo: number[]): void {
    if (arreglo.indexOf(numero) === -1) {
        console.log(`El número ${numero} no se encuentra en el arreglo.`);
    } else {
        console.log(`El número ${numero} está en el índice ${arreglo.indexOf(numero)}.`);
    }
}

verificarPosicion(155, array);

// Ejercicio 3: Encontrar el primer número mayor que 10
let PrimerMayor10 = array.find((numero) => {
    return numero > 10;
});

console.log(PrimerMayor10);

// Ejercicio 4: Encontrar todos los números mayores que 10
let numerosmayores10 = array.filter((numero) => {
    return numero > 10;
});

console.log(numerosmayores10);