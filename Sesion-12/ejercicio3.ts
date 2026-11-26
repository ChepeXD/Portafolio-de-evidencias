
function registrarTelefonos(nombre: string, ...telefonos: string[]): void {
    console.log("==============================");
    console.log("REGISTRO DE TELEFONOS");
    console.log("==============================");

    console.log("Estudiante: " + nombre);
    console.log("Telefonos registrados:");

    for (let i = 0; i < telefonos.length; i++) {
        console.log((i + 1) + ". " + telefonos[i]);
    }

    console.log("------------------------------");
}

// Prueba 1: Un teléfono
registrarTelefonos("Carlos", "7777-1111");

// Prueba 2: Dos teléfonos
registrarTelefonos("Maria", "2222-3333", "7777-4444");

// Prueba 3: Tres teléfonos
registrarTelefonos("Jose", "7000-1111", "7000-2222", "7000-3333");
