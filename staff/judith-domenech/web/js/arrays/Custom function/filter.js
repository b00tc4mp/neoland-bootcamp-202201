const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy', 'Eustaquia', 'Ester Colero', 'Leandro Gado', 'Ivan atimarte']

function filter(array, callback) {

    for (let i = 0; i < array.length; i++){

        const element = array[i]

        if(callback(element)) return element
    }
}

const Eustaquia = filter(names, (element) => {
     if(element === 'Eustaquia') return true
})

console.log(Eustaquia)



const Eustaquia = filter(names, (element) => element === 'Eustaquia')
console.log(Eustaquia)