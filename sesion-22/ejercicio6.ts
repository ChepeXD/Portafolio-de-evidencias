
console.log("===== EJERCICIO 6: TUPLA VS INTERFACE =====");

// OPCION A: Utilizando una tupla

let pagoTupla: [string, number, boolean] = [
    "CUENTA001",
    125.50,
    true
];

console.log("REGISTRO MEDIANTE TUPLA:");
console.log("Numero de cuenta:", pagoTupla[0]);
console.log("Monto: $" + pagoTupla[1].toFixed(2));
console.log("Solvente:", pagoTupla[2]);


// OPCION B: Utilizando una interface

interface PagoMunicipal {
    numeroCuenta: string;
    monto: number;
    solvente: boolean;
}

let pagoInterfaz: PagoMunicipal = {
    numeroCuenta: "CUENTA001",
    monto: 125.50,
    solvente: true
};

console.log("REGISTRO MEDIANTE INTERFACE:");
console.log("Numero de cuenta:", pagoInterfaz.numeroCuenta);
console.log("Monto: $" + pagoInterfaz.monto.toFixed(2));
console.log("Solvente:", pagoInterfaz.solvente);


// Comparacion
console.log("COMPARACION:");
console.log("La tupla tiene una estructura sencilla y utiliza posiciones fijas.");
console.log("La interface utiliza nombres de propiedades y facilita la lectura.");
