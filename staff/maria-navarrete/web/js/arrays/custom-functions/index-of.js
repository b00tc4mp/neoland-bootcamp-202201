const names = ['Jessica', 'Peter', 'Laura', 'Mike', 'Jessica', 'Wendy', 'Elsa', 'Mike']

const indexOf = (array, value, index) => {
    if(!index) index = 0
    for (let i = index; i < array.length; i++)
        if(array[i]===value) return i
    return -1
}

const indexOfResult = indexOf(names, 'Jessica', 2)

console.log(indexOfResult)






