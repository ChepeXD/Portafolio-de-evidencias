import promptSync from "prompt-sync";
const prompt = promptSync()

let precioProducto:number = Number(prompt("Ingrese el precio del producto: "))

function duplicarPrecio(precioProducto:number):number{
    return precioProducto * 2
}
 const precioDuplicado:number = duplicarPrecio(precioProducto)
 console.log(`el precio base del producto es: ${precioProducto}`)
console.log(`El precio duplicado del producto es: ${precioDuplicado}`)
// esta es una funcion por referencia, ya que recibe un valor y devuelve otro valor, en este caso el precio duplicado del producto.