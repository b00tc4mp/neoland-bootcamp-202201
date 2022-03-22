const arr = [1, 2, 3, 4, 5, 6, 7, 8] 
const separator = ' -- ' 


function join(array, separator) {
    let str = ''
    
    for (let i = 0; i < array.length; i++) {

        str += array[i]
         
        if (!(i === (array.length - 1))) {

            str += separator
        }
    }
        return str
}

const res = join(arr, separator)
console.log(res)


/*
console.log(arr.join())
//  1,2,3,4,5,6,7,8
console.log(arr.join('-'))
// 1-2-3-4-5-6-7-8
console.log(arr.join(''))
// 12345678
*/





