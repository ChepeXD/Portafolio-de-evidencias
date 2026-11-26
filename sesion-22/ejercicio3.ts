
console.log("===== EJERCICIO 3: PUNTO DE VENTA =====");

// Declarar tupla del producto
let producto: [string, number, number] = ["Pupusas revueltas", 0.75, 6];

// Funcion para calcular el total
function calcularTotal(orden: [string, number, number]): number {

    let nombre: string = orden[0];
    let precio: number = orden[1];
    let cantidad: number = orden[2];

    let total: number = precio * cantidad;

    console.log("Producto:", nombre);
    console.log("Precio unitario: $" + precio.toFixed(2));
    console.log("Cantidad:", cantidad);
    console.log("Total a pagar: $" + total.toFixed(2));

    return total;
}

// Ejecutar funcion
calcularTotal(producto);
