const numbers = ['one', 'two', 'three']
console.log('numbers:', numbers)
// expected output: "numbers:" Array ["one", "two", "three"]

const reversed = numbers.reverse()
console.log('reversed:', reversed)
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('numbers:', numbers)
// expected output: "numbers:" Array ["three", "two", "one"]



/* El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero. 

"array1:" Array ["one", "two", "three"]
"reversed:" Array ["three", "two", "one"]
"array1:" Array ["three", "two", "one"]
*/