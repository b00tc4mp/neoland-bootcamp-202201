const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

const every = (array, callback) => {
    for (let i = 0; i < array.length; i++)
        if (!callback(array[i])) {
            return false
        }
    return true
}

const everyResult = every(names, name => name.length>3)

console.log(everyResult)

