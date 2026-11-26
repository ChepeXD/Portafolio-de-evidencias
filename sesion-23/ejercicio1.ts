
export {};

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
}

interface ItemCarrito {
    productoId: number;
    cantidad: number;
}

// Catalogo inicial
const productos: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 650, stock: 10, categoria: "Tecnologia" },
    { id: 2, nombre: "Mouse", precio: 15, stock: 20, categoria: "Accesorios" },
    { id: 3, nombre: "Teclado", precio: 25, stock: 15, categoria: "Accesorios" },
    { id: 4, nombre: "Monitor", precio: 180, stock: 5, categoria: "Tecnologia" }
];

// Agregar producto con push
productos.push({
    id: 5,
    nombre: "Audifonos",
    precio: 30,
    stock: 12,
    categoria: "Accesorios"
});

// Filtrar productos disponibles
const disponibles = productos.filter(p => p.stock > 0);

console.log("PRODUCTOS DISPONIBLES:");
console.log(disponibles);

// Buscar producto con find
function buscarProducto(id: number): Producto | undefined {
    return productos.find(p => p.id === id);
}

// Carrito de compras
const carrito: ItemCarrito[] = [
    { productoId: 1, cantidad: 2 },
    { productoId: 2, cantidad: 3 },
    { productoId: 5, cantidad: 1 }
];

// Generar detalle con map
const detalle = carrito.map(item => {
    const producto = buscarProducto(item.productoId);

    if (producto !== undefined) {
        return {
            nombre: producto.nombre,
            cantidad: item.cantidad,
            subtotal: producto.precio * item.cantidad
        };
    }

    return {
        nombre: "Producto no encontrado",
        cantidad: item.cantidad,
        subtotal: 0
    };
});

// Calcular total con reduce
const total = detalle.reduce((suma, item) => {
    return suma + item.subtotal;
}, 0);

// Actualizar inventario con forEach
carrito.forEach(item => {
    const producto = buscarProducto(item.productoId);

    if (producto !== undefined) {
        producto.stock = producto.stock - item.cantidad;
    }
});

// Mostrar detalle
console.log("\nDETALLE DEL PEDIDO:");

detalle.forEach(item => {
    console.log(
        item.nombre +
        " | Cantidad: " + item.cantidad +
        " | Subtotal: $" + item.subtotal.toFixed(2)
    );
});

console.log("\nTOTAL A PAGAR: $" + total.toFixed(2));

// Mostrar inventario actualizado
console.log("\nEXISTENCIAS ACTUALIZADAS:");

productos.forEach(producto => {
    console.log(producto.nombre + ": " + producto.stock + " unidades");
});
