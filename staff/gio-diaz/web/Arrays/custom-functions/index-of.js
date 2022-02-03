let people = ["vanessa", "carlos", "luis", "begoña", "luisa", "anibal", "vanessa", "carlos"]

function indexOf(array, searchElement, index) {


    for (let i = index; i < array.length; i++) {
        if(people[i] === searchElement) {
           return i
        }
    }
    return -1

    
}

console.log(indexOf(people, 'carlos', 3))
// expected output 1