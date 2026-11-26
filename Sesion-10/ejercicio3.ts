
function mostrarBienvenida(nombre: string): void {
    console.log("================================");
    console.log(" BIENVENIDO AL EVENTO UNIVERSITARIO");
    console.log("================================");
    console.log("Participante: " + nombre);
    console.log("Gracias por asistir a nuestro evento.");
    console.log("--------------------------------");
}

// Llamadas a la función con diferentes participantes
mostrarBienvenida("José");
mostrarBienvenida("Carlos");
mostrarBienvenida("María");
