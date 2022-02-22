function pop(array) {
    const last = array[array.length - 1]

    array.length--

    return last
}

// TEST CASE 1

const animals = ['lobo feroz', 'abeja maya', 'pepa pig', 'simba rey leon', 'raton mickey']

const poppedAnimal = pop(animals)

console.log(poppedAnimal)
// 'raton mickey'

console.log(animals)
// ['lobo feroz', 'abeja maya', 'pepa pig', 'simba rey leon']

// TEST CASE 2

const nums = [1, 2, 3, 4, 5, 6]

const poppedNum = pop(nums)

console.log(poppedNum)
// 6

console.log(nums)
// [1, 2, 3, 4, 5]