const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

const reverse = (array) => {
    for(let i = 0; i< array.length/2; i++){
        const element1 = array[i]
        const element2 = array[array.length - 1 - i]

        array[i]= element2
        array[array.length-1-i] = element1
    }
    return array
}

const reverseResult = reverse(names)

console.log(reverseResult)
