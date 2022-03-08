const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

const pop = array =>{
    const lastItem = array[array.length-1]
    array.length--
    return lastItem
}

const resultPop = pop(names)

console.log(resultPop)
console.log(names)