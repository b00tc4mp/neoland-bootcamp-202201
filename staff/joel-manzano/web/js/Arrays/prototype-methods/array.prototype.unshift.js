const animals = ['dog', 'cat', 'horse', 'pig', 'bird']


function unshift(array, searchElement){

    for(let i = 0; i < array.length; i++) {
        if(array[i] === searchElement) {
            return i
        }
    }

}

const index = animals.unshift("Panter", "Tiger");
console.log(index)