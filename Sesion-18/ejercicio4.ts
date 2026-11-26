
function contarCaracteres(texto: string): number {
    // Caso base
    if (texto === "") {
        return 0;
    }

    // Llamada recursiva
    return 1 + contarCaracteres(texto.slice(1));
}

// Prueba
let codigo: string = "UNIVO2026";

console.log("Codigo: " + codigo);
console.log("Cantidad de caracteres:");
console.log(contarCaracteres(codigo));
