const names = ['Peter', 'John', 'Jack', 'Tiffany', 'Jason', 'Mathew', 'Dave', 'Jessica', 'Wendy', 'Janise', 'Janet', 'Kelly', 'Taylor', 'Christina', 'Mary']

const someWordWithMoreThan6Chars = names.some(name => name.length > 6)

console.log(someWordWithMoreThan6Chars)

const someWordWithMoreThan7Chars = names.some(name => name.length > 7)

console.log(someWordWithMoreThan7Chars)

const someWordWithMoreThan9Chars = names.some(name => name.length > 9)

console.log(someWordWithMoreThan9Chars)