const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

function push () {
    const array = arguments[0]
    for(let i = 1; i<arguments.length; i++)
        array[array.length] = arguments[i]
    return array.length
}

const resultPush = push(names, 'Juliana')
console.log(resultPush)
console.log(names)

const resultPush2 = push(names, 'Carlos', 'Samuel', 'Lucía')
console.log(resultPush2)
console.log(names)


