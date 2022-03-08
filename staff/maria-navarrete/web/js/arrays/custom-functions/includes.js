const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

const includes = (array, item, index) => {
    if(!index) index=0
    for(let i = index; i<array.length; i++)
        if(array[i]===item)
            return true
    return false
}

const resultIncludes = includes(names, 'Mike')
console.log(resultIncludes)

console.log(includes(names, 'Tom'))
console.log(includes(names, 'Peter', 2))
