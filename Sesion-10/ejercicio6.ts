
import promptSync from "prompt-sync";

const prompt = promptSync();

// 1. Mostrar encabezado del sistema
function mostrarEncabezado(): void {
    console.log("==================================");
    console.log("       SISTEMA DE VENTAS");
    console.log("==================================");
}

// 2. Validar y convertir el precio ingresado
function validarPrecio(precioTexto: string): number {
    const precio = Number(precioTexto);

    if (isNaN(precio) || precio <= 0) {
        return 0;
    }

    return precio;
}

// 3. Clasificar el tipo de cliente
function clasificarCliente(tipo: string): string {
    if (tipo === "1") {
        return "Frecuente";
    } else {
        return "General";
    }
}

// 4. Calcular el total de la venta
function calcularTotal(precio: number, cantidad: number): number {
    return precio * cantidad;
}

// 5. Mostrar resumen final
function mostrarResumen(
    nombre: string,
    cliente: string,
    precio: number,
    cantidad: number,
    total: number
): void {
    console.log("\n========== RESUMEN DE VENTA ==========");
    console.log("Cliente: " + nombre);
    console.log("Tipo de cliente: " + cliente);
    console.log("Precio del producto: $" + precio.toFixed(2));
    console.log("Cantidad: " + cantidad);
    console.log("Total de venta: $" + total.toFixed(2));
    console.log("======================================");
}

// PROGRAMA PRINCIPAL

mostrarEncabezado();

const nombre = prompt("Ingrese el nombre del cliente: ");

console.log("\nTipo de cliente:");
console.log("1. Frecuente");
console.log("2. General");

const tipo = prompt("Seleccione una opción: ");

const cliente = clasificarCliente(tipo);

const precioTexto = prompt("Ingrese el precio del producto: ");
const precio = validarPrecio(precioTexto);

if (precio === 0) {
    console.log("Error: El precio ingresado no es válido.");
} else {
    const cantidad = Number(prompt("Ingrese la cantidad: "));

    if (isNaN(cantidad) || cantidad <= 0 || !Number.isInteger(cantidad)) {
        console.log("Error: La cantidad ingresada no es válida.");
    } else {
        const total = calcularTotal(precio, cantidad);

        mostrarResumen(nombre, cliente, precio, cantidad, total);
    }
}
