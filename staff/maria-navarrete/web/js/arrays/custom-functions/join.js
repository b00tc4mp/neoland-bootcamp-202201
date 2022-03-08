const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

const join = (array, separator) => {
    if(!separator) separator=','
    let joined = ''
    for(let i = 0; i<array.length; i++){
        if(joined==='') joined+= array[i]
        else joined+= separator + array[i]
    }
    return joined
}

const resultJoins = join(names, '-')

console.log(resultJoins)

console.log(join(names))