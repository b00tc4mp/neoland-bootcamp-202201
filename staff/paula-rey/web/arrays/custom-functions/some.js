const names = ['Peter', 'John', 'Jack', 'Tiffany', 'Jason', 'Mathew', 'Dave', 'Jessica', 'Wendy', 'Janise', 'Janet', 'Kelly', 'Taylor', 'Christina', 'Mary']

function some(array, callback) {
    for (let i = 0; i < array.length; i++)
        if (callback(array[i]))
            return true

    return false
}

const someWordWithMoreThan6Chars = some(names, name => name.length > 6)

console.log(someWordWithMoreThan6Chars)

const someWordWithMoreThan7Chars = some(names, name => name.length > 7)

console.log(someWordWithMoreThan7Chars)

const someWordWithMoreThan9Chars = some(names, name => name.length > 9)

console.log(someWordWithMoreThan9Chars)