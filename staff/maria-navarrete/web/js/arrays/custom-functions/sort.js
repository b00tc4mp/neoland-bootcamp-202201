const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']
const numbers = [1, 7, 2, 6, 1, 5, 50, 20]

function sort() {
    const array = arguments[0]
    let callback = arguments[1]

    if (!callback)
        callback = (a, b) => (''+a > ''+b)? 1 : -1

    for (let i = 0; i < array.length; i++) {
        const item1 = array[i]
        let smallest = item1
        let index = i
        for(let j = i+1; j<array.length; j++){
            const item2 = array[j]
             if (callback(smallest, item2)>0) {
                 smallest = item2
                 index = j
            }
        }
        array[i]=smallest
        array[index]=item1
    }
    return array
}

console.log(sort(names))
console.log(sort(numbers, (a, b) => a - b))
console.log(sort(numbers))