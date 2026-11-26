
export {};

interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

const productos: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 650 },
    { id: 2, nombre: "Mouse", precio: 15 },
    { id: 3, nombre: "Teclado", precio: 25 },
    { id: 4, nombre: "Monitor", precio: 180 }
];

console.log("INVENTARIO DE LA TIENDA:");

for (const producto of productos) {
    console.log(producto.nombre);
}
