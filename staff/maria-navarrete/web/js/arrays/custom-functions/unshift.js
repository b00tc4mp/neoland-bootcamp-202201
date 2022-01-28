const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

function unshift() {
    const array = arguments[0]
    for (let i = arguments.length-1; i >=1; i--) {
        for(let j = array.length; j>=0; j--)
            j>0 ? array[j]=array[j-1] : array[j]=arguments[i]         
    }
    return array.length
}

const resultUnshift = unshift(names, 'Lucas')

console.log(resultUnshift)
console.log(names)

console.log(unshift(names, 'Carlos', 'Samuel', 'Lucía'))
console.log(names)
