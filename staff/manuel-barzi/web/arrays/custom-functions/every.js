const names = ['Peter', 'John', 'Jack', 'Tiffany', 'Jason', 'Mathew', 'Dave', 'Jessica', 'Wendy', 'Janise', 'Janet', 'Kelly', 'Taylor', 'Christina', 'Mary']

function every(array, callback) {
    for (let i = 0; i < array.length; i++)
        if (!callback(array[i]))
            return false

    return true
}

const allMoreThan3Chars = every(names, name => name.length > 3)

console.log(allMoreThan3Chars)

const allMoreThan6Chars = every(names, name => name.length > 6)

console.log(allMoreThan6Chars)

const allStrings = every(names, name => typeof name === 'string')

console.log(allStrings)