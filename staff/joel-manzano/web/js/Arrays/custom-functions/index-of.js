// Lo primero preparar el get started (preparar todo lo necesario para ponernos a pensar en la solución)
// Lo segundo será preparar los datos que necesito para hacer el testo de si mi funcion funciona correctamente
// Lo tercero será pensar en qué parámetros necesita mi función y pasarle los datos que necesite en la invocación o llamada
// En lenguaje humano, tratar de resolver paso a paso el problema y escribirlo
// Traducir en lenguaje JavaScript lo que haríamos como humanos, paso a paso
// SI tenemos algún problema, debuggamos

const animals = ['dog', 'cat', 'horse', 'pig', 'bird']


function indexOf(array, searchElement){

    for(let i = 0; i < array.length; i++) {
        if(array[i] === searchElement) {
            return i
        }
    }

}

const index = indexOf(animals, 'pig')
console.log(index) // expected output: 3
// standAlone

// Partimos de que tenemos la colección y el título a encontrar (Amorfoda de Bad Bunny)
// Primero coger la colección (array) y el título a buscar
// Segundo (recorremos desde el disco 0 al último) empezar a contar desde la posición 0 hasta el final
// y por cada disco comprobamos si el disco que tengo en frente es Amorfoda de Bad Bunny (searchElement)
// Cuando encuentro el disco paro de contar
// Y voy a informar de la posicion del disco 