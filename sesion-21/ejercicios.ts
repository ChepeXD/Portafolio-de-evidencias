
// ==========================================
// SESION 21: ARREGLOS TIPADOS
// ==========================================


// EJERCICIO 1: CALIFICACIONES

let calificaciones: number[] = [8, 9, 7, 10, 9];

console.log("===== EJERCICIO 1: CALIFICACIONES =====");

console.log("Arreglo completo:");
console.log(calificaciones);

console.log("Tercera calificacion:");
console.log(calificaciones[2]);

console.log("Cantidad de calificaciones:");
console.log(calificaciones.length);


// EJERCICIO 2: EQUIPO DE TRABAJO

let equipo: string[] = ["Carlos", "Ana", "Jose", "Maria"];

console.log("\n===== EJERCICIO 2: EQUIPO DE TRABAJO =====");

console.log("Integrantes:");
console.log(equipo);

console.log("Primer integrante:");
console.log(equipo[0]);

console.log("Ultimo integrante:");
console.log(equipo[equipo.length - 1]);

console.log("Cantidad de integrantes:");
console.log(equipo.length);

console.log("La tercera posicion utiliza el indice 2 porque los arreglos comienzan desde el indice 0.");


// EJERCICIO 3: ACTUALIZACION DE PRECIOS

let precios: number[] = [1.50, 2.00, 3.25, 4.00];

console.log("\n===== EJERCICIO 3: ACTUALIZACION DE PRECIOS =====");

console.log("Precios originales:");
console.log(precios);

// Modificar el segundo precio
precios[1] = 2.50;

console.log("Precios actualizados:");
console.log(precios);


// EJERCICIO 4: ACCESO FUERA DE RANGO

const departamentos: string[] = ["San Miguel", "La Union", "Morazan"];

console.log("\n===== EJERCICIO 4: ACCESO FUERA DE RANGO =====");

console.log("Cantidad de departamentos:");
console.log(departamentos.length);

// Consultar indice 3
console.log("Consulta del indice 3:");
console.log(departamentos[3]);

// Mostrar el ultimo elemento
console.log("Ultimo departamento:");
console.log(departamentos[departamentos.length - 1]);

console.log("El arreglo contiene 3 elementos.");
console.log("Los indices validos son 0, 1 y 2.");


// EJERCICIO 5: ASISTENCIA SEMANAL

let asistencia: boolean[] = [true, true, false, true, false];

console.log("\n===== EJERCICIO 5: ASISTENCIA SEMANAL =====");

console.log("Registro completo:");
console.log(asistencia);

console.log("Lunes:");
console.log(asistencia[0]);

console.log("Miercoles:");
console.log(asistencia[2]);

console.log("Viernes:");
console.log(asistencia[4]);

console.log("Cantidad de dias:");
console.log(asistencia.length);


// EJERCICIO 6: DOS FORMAS DE DECLARAR

let municipios1: string[] = ["San Miguel", "Chinameca", "Moncagua"];

let municipios2: Array<string> = ["San Miguel", "Chinameca", "Moncagua"];

console.log("\n===== EJERCICIO 6: DOS FORMAS DE DECLARAR =====");

console.log("Segundo municipio del primer arreglo:");
console.log(municipios1[1]);

console.log("Segundo municipio del segundo arreglo:");
console.log(municipios2[1]);

console.log("Ambas formas funcionan correctamente.");
console.log("Prefiero string[] porque su sintaxis es mas corta y sencilla.");
