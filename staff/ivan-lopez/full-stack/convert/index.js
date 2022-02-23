const fs = require('fs/promises')

const { argv: [,, command] } = process


if (command === 'process-data') {

    fs.readFile('./input/lorem.txt', 'utf-8')

    .then(data => {
        let str = ""
        for(let i = 0; i < data.length; i++) {
           // str = str + data[i]
            if (data[i] === '0') str = str + 'o'
            else if (data[i] === '5') str = str + 's'
            else if (data[i] === '1') str = str + 'l'
            else str = str + data[i]
            
        }
        return fs.writeFile('./input/lorem.txt', str)
        
    })
        
            .then(() => console.log('success'))
            .catch(console.log)

}

// TODO proccess-data to  lorem-process.txt || '0' should be 'o', '5' should be 's', '1' should be 'l'
// Not use Array.prototype or others prototypes
else console.log('command not found')