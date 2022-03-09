const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy', 'Eustaquia', 'Ester Colero', 'Leandro Gado', 'Ivan atimarte']

const some = (array, callback) => {
    for(let i = 0; i < array.length; i++)
    if(callback(array[i]) === true) return true
} 

const results = some(names, name => name.length > 3)
console.log(results)


