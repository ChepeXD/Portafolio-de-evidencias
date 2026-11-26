
function construirMensaje(...fragmentos: string[]): string {
    return fragmentos.join(" ");
}

// Pruebas
console.log(construirMensaje("Bienvenidos", "al", "evento", "universitario"));

console.log(construirMensaje("El", "registro", "ha", "finalizado"));

console.log(construirMensaje("Gracias", "por", "su", "participacion"));
