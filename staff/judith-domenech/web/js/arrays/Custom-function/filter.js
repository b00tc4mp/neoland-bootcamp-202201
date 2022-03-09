const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy', 'Eustaquia', 'Ester Colero', 'Leandro Gado', 'Ivan atimarte']

const filter = (array, callback) => {
    const filtered = []
    let index = 0
    for (let i = 0; i < array.length; i++)
        if (callback(array[i])) {
            filtered[index] = array[i]
            index++
        }
    return filtered
}
 
const filtered = filter(names, name => name.length > 4)
console.log(filtered)