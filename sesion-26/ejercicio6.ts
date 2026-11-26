
export {};

const libros: string[] = [
    "Programacion en TypeScript",
    "Bases de Datos",
    "Redes Informaticas",
    "Sistemas Operativos",
    "Ciberseguridad"
];

// Primera forma: for tradicional
console.log("RECORRIDO CON FOR:");

for (let i = 0; i < libros.length; i++) {
    console.log(libros[i]);
}

// Segunda forma: for...of
console.log("\nRECORRIDO CON FOR...OF:");

for (const libro of libros) {
    console.log(libro);
}

// Tercera forma: forEach
console.log("\nRECORRIDO CON FOREACH:");

libros.forEach(libro => {
    console.log(libro);
});
