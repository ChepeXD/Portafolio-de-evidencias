
export {};

const notas: number[] = [8.5, 9.0, 7.5, 6.8, 10.0, 8.0];

console.log("REPORTE DE CALIFICACIONES:");

notas.forEach((nota, indice) => {
    console.log(
        "Calificacion #" + (indice + 1) + ": " + nota.toFixed(2)
    );
});
