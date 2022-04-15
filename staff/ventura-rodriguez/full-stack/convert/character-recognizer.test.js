const characterRecognizer = require('./character-recognizer')

const testCharacterRecognizer = () => {

    let str = 'h01a5'
    
    let res = characterRecognizer(str)

    if (!typeof res === 'string') throw Error('res is not a string')
    
    else if (!(res.length === str.length)) throw Error('res has different length')
    
    else if (!(res[0] === 'h')) throw Error(`character at the position 0 expected 'h' but got ${res[0]}`)
    
    else if (!(res[1] === 'o')) throw Error(`character at the position 1 expected 'o' but got ${res[1]}`)
    
    else if (!(res[2] === 'l')) throw Error(`character at the position 2 expected 'l' but got ${res[2]}`)
    
    else if (!(res[3] === 'a')) throw Error(`character at the position 3 expected 'a' but got ${res[3]}`)
    
    else if (!(res[4] === 's')) throw Error(`character at the position 4 expected 's' but got ${res[4]}`)

    else console.log('test ok')

}


module.exports = testCharacterRecognizer