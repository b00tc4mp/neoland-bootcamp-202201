const fs = require('fs(promise')

const { argv: [,, command] } = process

if (command === 'copy') {
    fs.readFile('./input/lorem.txt', 'utf-8')
    .then(data => fs.writeFile('./output/lorem-copy.txt, data'))
    .then(() => console.log('success'))
    .catch(console.log)


}

else console.log('command not found')