const arr = ['hello', 'hola', 'salute', 'hallo']
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// arr.shift() Warning not use in this file!

function shift(array) {

    const firstElement = array[0]

    for(let i = 0; i < array.length ; i++) array[i] = array[i + 1]

    array.length--

    return firstElement

}


const result = shift(arr)

console.log(result) // Expected output: 'hello'

console.log(arr.length) // Expected output: 3

console.log(arr[0]) // Expected output: 'hola'


const result2 = shift(arr2)

console.log(result2) // Expected output: 1

console.log(arr2.length) // Expected output: 8

console.log(arr2[0]) // Expected output: 2


// Por cada concepto escrito, lanzamos el código para probar su funcionamiento (ex: node shift.js)

// Si hago una línea de código y no hace lo que espero, nos tenemos que preguntar por qué no hace lo que espero
// Para ello lanzamos un debugger si fuera necesario (ex: node --inspect-brk shift.js)