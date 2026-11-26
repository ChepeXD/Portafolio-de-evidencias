
console.log("===== EJERCICIO 1: COORDENADAS GEOGRAFICAS =====");

// Declarar tupla de dos valores numericos
let coordenadas: [number, number] = [13.4833, -88.1833];

console.log("Latitud:", coordenadas[0]);
console.log("Longitud:", coordenadas[1]);

console.log("Coordenadas completas:");
console.log(coordenadas);

// Ejemplos incorrectos:
// coordenadas = [13.4833, -88.1833, 5];
// coordenadas = ["San Miguel", -88.1833];

// Estos ejemplos generan errores porque la tupla
// solamente acepta dos numeros en ese orden.
