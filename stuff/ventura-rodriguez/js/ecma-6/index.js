// var str = 'Hello world!'
const str = 'Hello world!'  // Inmutable
let str2 = 'Hello world!'   // Mutable

const obj = {
    name: null,
    username: null
}
// obj = {} expec error

obj.name = 'Ventu'
obj.username = 'Lucatiel'


// function sum(x, y) {
//     return x + y
// }

// Syntax 1
const sum = (x, y) => {
    return x + y
}
// Syntax 2
const min = (x, y) => x - y
// Syntax 3
const pow = x => x ** 2
// Syntax 3
const hello = () => console.log('Hello world!')