
function buscarCursos(texto: string, limite: number = 5): void {
    console.log("================================");
    console.log("       BUSQUEDA DE CURSOS");
    console.log("================================");
    console.log("Buscando: " + texto);
    console.log("Máximo de resultados: " + limite);
    console.log("--------------------------------");
}

// Primera llamada: utiliza el límite predeterminado (5)
buscarCursos("Programación");

// Segunda llamada: utiliza un límite diferente (10)
buscarCursos("Administración de sistemas", 10);
