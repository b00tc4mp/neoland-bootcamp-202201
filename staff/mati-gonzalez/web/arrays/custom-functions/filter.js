const colors = ['red', 'green', 'blue', 'purple', 'yellow', 'magenta', 'white', 'gray', 'tomato', 'navy', 'dodger', 'black', 'brown']

// function filter(array, callback) {
//     const filtered = []
//     let index = 0

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]

//         if (callback(element)) {
//             filtered[index] = element

//             index++
//         }
//     }

//     return filtered
// }

function filter(array, callback) {
    const filtered = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        if (callback(element))
            filtered[filtered.length] = element
    }

    return filtered
}

// function filter(array, callback) {
//     const filtered = []

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]

//         if (callback(element))
//             filtered.push(element)
//     }

//     return filtered
// }

// const filteredColors = filter(colors, function(color) { 
//     return color.startsWith('b') 
// })

// const filteredColors = filter(colors, color => {
//     return color.startsWith('b')
// })

const filteredColors = filter(colors, color => color.startsWith('b'))

console.log(filteredColors)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNums = filter(nums, num => num < 6)

console.log(filteredNums)