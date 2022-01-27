const numbers = [2, 5, 7, 9 ,8]

// function indexOf(array, searchElement) {

//     for(let i = 0; i < array.length; i++) {
//         const element = array[i]
//         if(element === searchElement) {
//             return i
//         }
//     }
// }

const indexOf = (array, searchElement) => {
    for(let i = 0; i < array.length; i++) if(array[i] === searchElement) return i
}

const res = indexOf(numbers, 7)
// expected output: 2

console.log(res)

// Me voy a buscar al array, recorro el array uno en uno, comparo si mi searchElement
// es igual al elemento del array que estoy mirando en cada iteración y devuelvo la posición del elemento encontrado