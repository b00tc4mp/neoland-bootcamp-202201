const numbers = [2, 9, 3, 4, 5, 2, 5, 8];

function indexOf (array, number, index) {
    
    for(let i = index; i < array.length; i++ ){

        if(array[i] === number) {
        return i
        }
    }
    return -1
}

console.log(indexOf(numbers, 2, 3))





