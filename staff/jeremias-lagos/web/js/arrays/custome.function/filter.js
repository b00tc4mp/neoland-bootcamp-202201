const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

function filter(array){
    const shortNames = []
    let index = 0

    for (let i = 0; i < names.length; i++)
         if (names[i] < 5) {
             shortNames = shortNames + names[i]

             index++
         }
    return shortNames
}
