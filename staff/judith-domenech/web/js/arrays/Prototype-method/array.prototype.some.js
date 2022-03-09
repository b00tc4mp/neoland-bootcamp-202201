const names = ['Peter', 'John', 'Jack', 'Tiffany', 'Jason', 'Mathew', 'Dave', 'Jessica', 'Wendy', 'Janise', 'Janet', 'Kelly', 'Taylor', 'Christina', 'Mary']

const someWordWithMoreThan6Chars = names.some(name => name.length > 6)

console.log(someWordWithMoreThan6Chars)


/* 
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada. 
    true    */