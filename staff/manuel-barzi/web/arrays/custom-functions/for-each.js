const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

// function forEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]

//         callback(element)
//     }
// }

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++)
        callback(array[i])
}

forEach(names, name => console.log(name))