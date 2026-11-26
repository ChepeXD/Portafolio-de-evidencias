
export {};

const ventas: number[] = [2.50, 3.00, 4.25, 5.50, 2.75, 6.00];

let totalVentas = 0;

for (const venta of ventas) {
    totalVentas = totalVentas + venta;
}

console.log("REPORTE DE VENTAS:");
console.log("Cantidad de ventas: " + ventas.length);
console.log("Total recaudado: $" + totalVentas.toFixed(2));
