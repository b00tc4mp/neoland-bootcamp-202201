function pop(array) {
    const let = array[array.length - 1]

    array.length--

    return last
}

// test one

const animals = ['lobo feroz', 'abeja maya', 'pepa pig', 'simba rey leon', 'raton mickey']

const poppedAnimal = pop(animals)

console.log(poppedAnimal)

console.log(animals)


// test two

const nums = [1, 2, 3, 4, 5, 6]

const poppedNum = pop(nums)

console.log(poppedNum)
// 6

console.log(nums)
// [1, 2, 3, 4, 5]