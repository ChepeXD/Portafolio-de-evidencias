
console.log("===== EJERCICIO 4: ARREGLO VS TUPLA =====");

// Declaracion utilizando un arreglo
let respuesta: (string | number)[] = [200, "OK"];

console.log("Respuesta original:");
console.log(respuesta);

// Agregar un tercer elemento
respuesta.push("Correcto");

console.log("Despues de agregar un elemento:");
console.log(respuesta);

// Cambiar el orden de los elementos
respuesta = ["OK", 200];

console.log("Despues de cambiar el orden:");
console.log(respuesta);


// Correccion utilizando una tupla
let respuestaCorrecta: [number, string] = [200, "OK"];

console.log("Respuesta con tupla:");
console.log(respuestaCorrecta);

// Ejemplos incorrectos:
// respuestaCorrecta = ["OK", 200];
// respuestaCorrecta = [200, "OK", "Correcto"];
