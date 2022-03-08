const names1 = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']
const names2 = ['Sara', 'Lucia', 'Pedro', 'Ramón']


const concat2 = (array1, array2)  =>{
    let newArray = []
    let totalLaps = array1.length + array2.length

    for(let i = 0; i<totalLaps; i++)
        newArray[i]= i<array1.length ? array1[i] : array2[i-array1.length]
    
    return newArray
}

const resultConcat = concat2(names1, names2)

console.log(resultConcat)

console.log(concat2(names2, names1))

