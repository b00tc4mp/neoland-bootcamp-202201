// Receta:
// 1 - Leer la documentación
// 2 - Crear el esquema inicial del fichero
// 3 - Crear datos
// 4 - Crear parametros y escribir que esperamos que devuelva la función
// 5 - Crear los expected output que necesitemos para crear la funcion
// 6 - Escribir en lenguaje humano como resolveríamos nosotros este problema
// 7 - Traducir el lenguaje humano a lenguaje javascript
// 8 - En caso de que una línea de código no se comporte como yo espero, debuggear.
// 9 - En última instancia, refactorizmos el código (opcional)

const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];

const concat = (array1, array2) => {

    const newArray = []

    const totalLaps = array1.length + array2.length

    for(let i = 0; i < totalLaps; i++) 
       newArray[i] = i < array1.length ? array1[i] : array2[i - array1.length]

    return newArray

}
console.log(concat(arr1, arr2))
// Expected output: ["a", "b", "c", "d", "e", "f"]
console.log(concat(arr2, arr1))
// Expected output: ["d", "e", "f", "a", "b", "c"]

// implementacion (suposición de funcionamiento)
// 0 - Comprar la sala 3
// 1- ir a la sala 1 y cogemos el contenido (coger primero el cd1... luego el cd2... cd3) y los vamos pasando a la sala nueva de forma ordenada
// 2 cuando terminemos con el contenido de la sala 1, ir a la sala 2
// 3 coger el contenido de la sala 2 y coger uno a uno los cds a la nueva sala.
// 4 ordenar uno a uno después de los primeros.
// 5 Cuando termine el trabajo, ir al jefe a decirle que he terminado.



// if(i < array1.length) newArray[i] = array1[i]
// else newArray[i] = array2[i - array1.length]




/*FORM MP:

const letters = ['a', 'b', 'c']
const numbers = [1, 2, 3]


function concat(array1, array2) {

    const newArray = []

    for(let i = 0; i < array1.length; i++) {

        newArray[newArray.length] = array1[i] 
    }

    for(let i = 0; i < array2.length; i++) {

        newArray[newArray.length] = array2[i]
    }


    return newArray
}

console.log(concat(array1, array2))*/