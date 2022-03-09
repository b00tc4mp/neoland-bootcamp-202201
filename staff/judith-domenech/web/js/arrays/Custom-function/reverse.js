function reverse(array) {

    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        const elem1 = array[i]
        const elem2 = array[array.length - 1 - i]

        array[i] = elem2
        array[array.length - 1 - i] = elem1
    }

    return array
}

const numbers = ['one', 'two', 'three']
console.log('numbers:', numbers)
// expected output: "numbers:" Array ["one", "two", "three"]

const reversed = reverse(numbers)
console.log('reversed:', reversed)
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('numbers:', numbers)
// expected output: "numbers:" Array ["three", "two", "one"]