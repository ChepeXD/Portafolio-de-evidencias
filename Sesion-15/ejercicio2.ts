const presentes: string[] = ["Ana", "Carlos", "Mario"];

function agregar(nuevoEstudiante:string):string {
    presentes.push(nuevoEstudiante); //  Push Agrega el nuevo estudiante al final del arreglo
    return `Se ha agregado a ${nuevoEstudiante} a la lista de presentes.`;
}
console.log(agregar("Luis"));
console.log(presentes);
// Esta es una función por referencia, ya que recibe un arreglo y lo modifica directamente, agregando un nuevo estudiante a la lista de presentes.