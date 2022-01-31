const colors = ['red', 'green', 'blue', 'purple', 'yellow', 'magenta', 'white', 'gray', 'tomato', 'black'];

function filter (array, callback) {
    const filtered = []
    let index = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i]


        if (callback(array[i])) {

            index++
        }
    }   
    
    return filtered
}    

const res = filter(color => color.startsWith ('b'))

console.log(res)

