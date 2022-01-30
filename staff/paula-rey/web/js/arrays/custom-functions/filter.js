/*const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

const result = names.filter(word => word.length < 5)

console.log(result)*/


const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy', 'Maria']

function filter(array, callback) {
    const filtered = []
    let index = 0

    for (let i = 0; i < array.length; i++) {
        const element = array[i]
    
        if (callback(element)) {
            filtered[index] = element

            index++
        }
    return filtered
}




/*MODO MARIA PAU:

const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy', 'Maria']

const filter = (array, callback) => {
    const filtered = []
    let index = 0

    for (let i = 0; i < array.length; i++)

        if (callback(array[i])) {
            filtered[index] = array[i]

            index++
        }
    return filtered
}

EJEMPLOS PARA ENTENDER:

function masdecincoletras (palabra){
    if(palabra.length>5) return true
    else return false
}

function empiezaporM (palabra){
    if(palabra[0]==='M')return true
    else return false
}

function terminaporA(palabra){
    if(palabra[palabra.length-1]==='a') return true
    else return false
}

const filtered = filter(names, name => name.length > 4)
console.log(filtered)*/












