const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

const shift = array => {
    const firstItem = array[0]
    for (let i = 0; i < array.length - 1; i++)
        array[i] = array[i + 1]
    array.length = array.length - 1
    return firstItem
}

const resultShift = shift(names)

console.log(resultShift)
console.log(names)