 const preciosA: number[] = [2.50, 3.00, 4.00];

 //función por referencia, ya que recibe un arreglo y lo modifica directamente, cambiando cada precio sumándole 0.25.
function aumentarPreciosA(precios: number[]): void {
    precios.forEach((precio, indice) => {
        precios[indice] = precio + 0.25;
    });
}

console.log("Antes A:", preciosA);

aumentarPreciosA(preciosA);

console.log("Después A:", preciosA); 


//función por valor, ya que recibe un arreglo y devuelve un nuevo arreglo con los precios aumentados.
const preciosB: number[] = [2.50, 3.00, 4.00];

function aumentarPreciosB(precios: number[]): number[] {
    return precios.map((precio) => precio + 0.25);
}

console.log("Antes B:", preciosB);

const nuevosPrecios = aumentarPreciosB(preciosB);

console.log("Despues B:", nuevosPrecios);




/* preciosB
   ↓
[2.50, 3.00, 4.00]
   ↓
      map()
   ↓
[2.75, 3.25, 4.25] */