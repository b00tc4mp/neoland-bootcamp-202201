// const fs = require('fs')

// fs.readFile('./input/lorem.txt', 'utf-8', (error, data) => {
//     if (error) throw error

//     fs.writeFile('./output/lorem-copy.txt', data, error => {
//         if (error) throw error
//         console.log('success')
//     })
// })

const fs = require('fs/promises')

const { argv: [, , command] } = process

if(command === 'copy'){
    fs.readFile('./input/lorem.txt', 'utf-8')
        .then(data => fs.writeFile('./output/lorem-copy.txt', data))
        .then(() => console.log('success'))
        .catch(console.log)
}

else if (command === 'process-data') {
    fs.readFile('./input/lorem.txt', 'utf-8')
        .then(_data => {
            let data = ''
            for (let i = 0; i < _data.length; i++) {
                const char = _data[i]

                if (char === '0') data += 'o'
                else if (char === '5') data += 's' 
                else if (char === '1') data += 'l' 
                else data += char
            }
            return fs.writeFile('./output/lorem-process-data.txt', data)
        })
        .then(() => console.log('success'))
        .catch(console.log)
}
else console.log(command + ' is not a process')



