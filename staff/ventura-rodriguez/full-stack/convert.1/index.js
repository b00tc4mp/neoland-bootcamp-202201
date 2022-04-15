// const fs = require('fs')

// fs.readFile('./input/lorem.txt', 'utf-8', (error, data) => {
//     if (error) throw error

//     fs.writeFile('./output/lorem-copy.txt', data, error => {

//         if (error) throw error
//         console.log('success')
    
//     })

// })


const fs = require('fs/promises')

fs.readFile('./input/lorem.txt', 'utf-8')
.then(data => fs.writeFile('./output/lorem-copy.txt', data))
.then(() => console.log('success'))
.catch(console.log)


console.log(process.argv)