const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendi']

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++)
    callback(array[i])
}

forEach(names, name => console.log(name))


function terminaPorS (palabra) {

    if (palabra[0] === "M") return true
    else return false



}