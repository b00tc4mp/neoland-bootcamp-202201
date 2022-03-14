const names = ['Peter', 'John', 'Jack', 'Tiffany', 'Jason', 'Mathew', 'Dave', 'Jessica', 'Wendy', 'Janise', 'Janet', 'Kelly', 'Taylor', 'Christina', 'Mary']

const allMoreThan3Chars = names.every(name => name.length > 3)

console.log(allMoreThan3Chars)

const allMoreThan6Chars = names.every(name => name.length > 6)

console.log(allMoreThan6Chars)

const allStrings = names.every(name => typeof name === 'string')

console.log(allStrings)