/*
function push(array, element) {
    // const newIndex = array.length - 1 + 1
    // const newIndex = array.length
    // array[newIndex] = element
    array[array.length] = element
    return array.length
}
*/

function push() {
    const array = arguments[0]

    for (let i = 1; i < arguments.length; i++) {
        const element = arguments[i]

        array[array.length] = element
    }

    return array.length
}

// TEST CASE 1

const chars = ['a', 'b', 'c', 'd']

const newCharsLength = push(chars, 'e', 'f', 'g', 'h', 'i')

console.log(chars)
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

console.log(newCharsLength)
// 9

// TEST CASE 2

const booleans = [true, false, true, false, true, false]

const newBooleansLength = push(booleans, true)

console.log(booleans)
// [true, false, true, false, true, false, true]

console.log(newBooleansLength)
// 7

// TEST CASE 3

const nums = [10, 20, 30]

const newNumsLength = push(nums, 40, 50, 60, 70)

console.log(nums)
// [10, 20, 30, 40, 50, 60, 70]

console.log(newNumsLength)
// 7