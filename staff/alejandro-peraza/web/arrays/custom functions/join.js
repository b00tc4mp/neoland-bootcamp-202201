/*const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"*/

/*queremos separar cada elemento del array con '-' y que nos devuelva el string con '-'*/
// const elements = ['Fire', 'Air', 'Water'];

// function join (array, callback) {
// for (let i = 0; i < array.length; i ++)
// callback(array [i])
// }

// console.log(join(elements))
/*join(elements + '-'  console.log (elements))*/





// Receta:
// 1 - Leer y entender la documentación
// 2 - Crear el esquema inicial del fichero (esquema e invocación)
// 3 - Crear datos necesarios para la prueba
// 4 - Crear parametros y escribir que esperamos que devuelva la función (params and return). Después enviamos la data en nuestra invocación
// 5 - Crear los expected output que necesitemos para crear la funcion
// 6 - Escribir en lenguaje humano como resolveríamos nosotros este problema (paso a paso al detalle mas mínimo)
// 7 - Traducir el lenguaje humano a lenguaje javascript
// 8 - En caso de que una línea de código no se comporte como yo espero, debuggear.
// 9 - En última instancia, refactorizmos el código (opcional)


const arr = [1, 2, 3, 4, 5, 6, 7, 8] // cds
const separator = ' -- ' // cojines


function join(array, separator) {
    let str = ''
    for (let i = 0; i < array.length; i++) {
    }

        return // String with elements and separator in between
}


const res = join(arr, separator)
console.log(res)
// Expected output: '1 -- 2 -- 3 -- 4 -- 5 -- 6 -- 7 -- 8 -- 9'

// console.log(join(arr)) // Expected output: '1,2,3,4,5,6,7,8,9'

// console.log(join(arr, '')) // Expected output: '123456789'

// Implmentación en lenguaje humano (suposición de funcionamiento)
// Se nos pide que a una colección de cd gaurdados en una caja los guardemos en una librería y le pongamos cojines entre los cds
// para evitar que se rallen

// Compramos una estanteria del Ikea, entonces cogemos el primer cd de la caja y lo ponemos en la nueva estantería,
// después cogemos el primer cojin y lo ponemos al lado del cd1. Seguiremos cogiendo el cd2 y repetiremos el proceso
// que hemos realizado con el primer cd y el primer cojin.
// Cuando pongamos el último cd, iremos a avisar al ricachón de que su colección está a salvo rodeada de cojines
// en una estantería blanca muy bonita (kalak)