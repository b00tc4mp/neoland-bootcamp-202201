const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

const shift = array => {
    const firstItem = array[0]
    for (let i = 0; i < array.length - 1; i++)
        array[i] = array[i + 1]
    array.length = array.length - 1
    return firstItem
}

function unshift(array) {
    for (let i = 1; i < arguments.length; i++) {
        array[i - 1] = arguments[i]
    }
    return array.length
}

const resultUnshift = unshift(names, 'Lucas')

console.log(resultUnshift)
console.log(names)

console.log(unshift(names, 'Carlos', 'Samuel', 'Lucía'))
console.log(names)
