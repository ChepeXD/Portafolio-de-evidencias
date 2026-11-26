
console.log("===== EJERCICIO 5: MINI INVENTARIO =====");

// Estructura:
// [codigo, nombre, precio, stock]

let inventario: [string, string, number, number][] = [
    ["FER001", "Martillo", 8.50, 10],
    ["FER002", "Destornillador", 3.25, 15],
    ["FER003", "Alicate", 6.75, 8],
    ["FER004", "Taladro", 45.00, 4]
];

let valorTotal: number = 0;

// Recorrer el inventario
for (let i = 0; i < inventario.length; i++) {

    let codigo: string = inventario[i]![0];
    let nombre: string = inventario[i]![1];
    let precio: number = inventario[i]![2];
    let stock: number = inventario[i]![3];

    let subtotal: number = precio * stock;

    valorTotal = valorTotal + subtotal;

    console.log("------------------------");
    console.log("Codigo:", codigo);
    console.log("Herramienta:", nombre);
    console.log("Precio: $" + precio.toFixed(2));
    console.log("Stock:", stock);
    console.log("Valor en stock: $" + subtotal.toFixed(2));
}

console.log("------------------------");
console.log("VALOR TOTAL DEL INVENTARIO: $" + valorTotal.toFixed(2));
