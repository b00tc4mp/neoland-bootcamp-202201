const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

const some = (array, callback) => {
    for (let i = 0; i < array.length; i++)
        if (callback(array[i])) {
            return true
        }
    return false
}

const someResult = some(names, name => name.length>6)

console.log(someResult)