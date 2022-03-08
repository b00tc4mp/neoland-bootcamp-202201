const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

const find = (array, callback) =>{
    for (let i = 0; i < array.length; i++){
        const element = array[i]
        if (callback(element))
            return element
    }
}

const found = find(names, name => name.length>4)
console.log(found)