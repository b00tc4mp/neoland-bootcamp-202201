const fs = require('fs/promises')

const { argv: [,, command] } = process

const LetterO = 0
const LetterS = 5
const LetterL = 1

for (var i = 0; i< data.length ; i++) {
n += i;
    LetterO;
 }

if (command === 'copy') {

    fs.readFile('./input/lorem.txt', 'utf-8')
    .then(data => fs.writeFile('./output/lorem-copy.txt', data))
    .then(() => console.log('success'))
    .catch(console.log)

}

// TODO proccess-data to  lorem-process.txt || '0' should be 'o', '5' should be 's', '1' should be 'l'
// Not use Array.prototype or others prototypes
else console.log('command not found')