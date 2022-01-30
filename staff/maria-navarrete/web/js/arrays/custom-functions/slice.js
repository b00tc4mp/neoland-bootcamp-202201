const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

function slice() {
    const array = arguments[0]
    const newArray = []
    let start = arguments[1]
    let end = arguments[2]

    if (!start)
        start = 0
    else
        start = arguments[1] >= 0 ? arguments[1] : array.length + arguments[1]

    if (!end)
        end = array.length
    else
        end = arguments[2] >= 0 ? arguments[2] : array.length + arguments[2]

    for (let i = start; i < end; i++)
        newArray[newArray.length] = array[i]

    return newArray
}

console.log(slice(names))
console.log(slice(names, 1, 2))
console.log(slice(names, 3))
console.log(slice(names, 10))
console.log(slice(names, 2, -1))
console.log(slice(names, -4, -1))