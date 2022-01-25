const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

function map ( array, callback) {
    const mapped = []

    for (let i = 0; array.length; i++)
    mapped[i] = callback (array[i])

    return mapped
}

const NAMES = map (names, name => name.toUppercase())

console.log(NAMES)