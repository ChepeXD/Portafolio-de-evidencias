
function encontrarMayor(...valores: number[]): number | null {

    if (valores.length === 0) {
        return null;
    }

    let mayor: number = valores[0]!;

    for (let valor of valores) {
        if (valor > mayor) {
            mayor = valor;
        }
    }

    return mayor;
}

// Pruebas
console.log("Mayor venta: " + encontrarMayor(100, 250, 500, 150));
console.log("Mayor venta: " + encontrarMayor(800, 300, 1200));
console.log("Mayor venta: " + encontrarMayor());
