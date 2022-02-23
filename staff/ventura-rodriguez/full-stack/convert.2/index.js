const fs = require('fs/promises')

const { argv: [,, command] } = process

if (command === 'copy') {

    fs.readFile('./input/lorem.txt', 'utf-8')
    .then(data => fs.writeFile('./output/lorem-copy.txt', data))
    .then(() => console.log('success copy'))
    .catch(console.log)

}
else if (command === 'process-data') {

    fs.readFile('./input/lorem.txt', 'utf-8')
    .then(_data => {

        let data = ''

        for(let i = 0; i < _data.length; i++) {

            const character = _data[i]

            if      (character === '0') data += 'o' // data = data + 'o'
            else if (character === '1') data += 'l'
            else if (character === '5') data += 's'
            else                        data += character

        }

        return fs.writeFile('./output/lorem-process-data.txt', data)
    })
    .then(() => console.log('success process-data'))
    .catch(console.log)

}
else console.log('command not found')


// node --inspect-brk . process-data