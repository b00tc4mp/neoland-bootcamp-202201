const fs = require('fs/promises')

const copyFile = (from, to) => {

    fs.readFile(from, 'utf-8')
    .then(data => fs.writeFile(to, data))
    .then(console.log('success'))
    .catch(console.log)

}

module.exports = copyFile