const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

function find(array, callback) {

    for(let i = 0; i < array.length; i++) {

        const element = array[i]

        if(callback(element)) return element
    }

}

const mike = find(names, element => {
    if(element === 'Mike') return true
})

console.log(mike)


// const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

// const find = (array, callback) => {

//     let res 

//     for(let i = 0; i < array.length; i++) {

//         const element = array[i]

//         res = callback(element) ? element : undefined

//     }

//     return res
// }


// const mike = find(names, (element) => element === 'Mike')

// console.log(mike)