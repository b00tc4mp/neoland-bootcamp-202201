const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

const forEach=(array, callback)=>{
    for(let i = 0; i < array.length; i++)
    callback(array[i])
}

forEach(names, name => console.log('Hello, ' + name))