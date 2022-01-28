const animals = ['dog', 'cat', 'horse', 'pig', 'bird']


function shift(array, searchElement){

    for(let i = 0; i < array.length; i++) {
        if(array[i] === searchElement) {
            return i
        }
    }

}

const index = animals.shift();
console.log(index)