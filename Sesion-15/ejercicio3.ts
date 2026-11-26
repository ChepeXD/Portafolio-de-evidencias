const producto = {
    nombre: "Cuaderno",
    precio: 2.50,
    disponible: false
};

function agregarDisponibilidad(producto: {nombre: string;precio: number;disponible: boolean;}): void {
    producto.disponible = true;
}

console.log("Antes:", producto);

agregarDisponibilidad(producto);

console.log("Después:", producto);
// Esta es una función por referencia, ya que recibe un objeto y lo modifica directamente, cambiando la propiedad "disponible" a true.