// TEST CASE 1

const chars = ['a', 'b', 'c', 'd']

const newCharsLength = chars.push('e')

console.log(chars)
// ['a', 'b', 'c', 'd', 'e']

console.log(newCharsLength)
// 5

// TEST CASE 2

const booleans = [true, false, true, false, true, false]

const newBooleansLength = booleans.push(true)

console.log(booleans)
// [true, false, true, false, true, false, true]

console.log(newBooleansLength)
// 7

// TEST CASE 3

const nums = [10, 20, 30]

const newNumsLength = nums.push(40, 50, 60, 70)

console.log(nums)
// [10, 20, 30, 40, 50, 60, 70]

console.log(newNumsLength)
// 7