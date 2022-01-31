function reverse(array) {
    const limit = Math.floor(array.length / 2)

    for (let i = 0; i < limit; i++) {
        const elem1 = array[i]
        const elem2 = array[array.length - 1 - i]

        array[i] = elem2
        array[array.length - 1 - i] = elem1
    }

    return array
}

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
console.log('numbers:', numbers)

const reversed = reverse(numbers)
console.log('reversed:', reversed)

console.log('numbers:', numbers)