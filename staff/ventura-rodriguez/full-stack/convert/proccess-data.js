const fs = require('fs/promises')

const proccessData = (from, to) => {

    fs.readFile(from, 'utf-8')
    .then(data => fs.writeFile(to, characterRecognizer(data)))
    .then(console.log('success'))
    .catch(console.log)

}


module.exports = proccessData