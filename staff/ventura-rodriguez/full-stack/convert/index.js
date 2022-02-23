const copyFile = require('./copy-file')
const proccessData = require('./proccess-data')

const characterRecognizer = require('./character-recognizer')
const testCharacterRecognizer = require('./character-recognizer.test')

const { argv: [,, command]} = process


if (command === 'test') testCharacterRecognizer()

else if (command === 'copy') copyFile('./input/lorem.txt', './output/lorem.txt')

else if (command === 'proccess-data') proccessData('./input/lorem.txt', './output/lorem.txt')