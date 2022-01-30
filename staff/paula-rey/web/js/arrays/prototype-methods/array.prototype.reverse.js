const numbers = ['one', 'two', 'three']
console.log('numbers:', numbers)
// expected output: "numbers:" Array ["one", "two", "three"]

const reversed = numbers.reverse()
console.log('reversed:', reversed)
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('numbers:', numbers)
// expected output: "numbers:" Array ["three", "two", "one"]