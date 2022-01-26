const names = ['Peter', 'Dave', 'Jesssica', 'Wendy', 'Kelly', 'Mathew', 'Matt', 'Janet', 'Jack', 'John', 'Tiffany']

const every = (array, callback) => {
    
    for(let i = 0; i < array.length; i++) 
    if(callback(array[i]) === true ) return true
}

const results = every(names, name => name.length > 3)
console.log(results)