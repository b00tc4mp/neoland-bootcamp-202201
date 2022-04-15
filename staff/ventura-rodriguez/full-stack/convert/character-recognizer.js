const characterRecognizer = _data => {

    let data = ''

    for (let i = 0; i < _data.length; i++) {
        const character = _data[i]
        data += character === '1' ? 'l' : character === '0' ? 'o' : character === '5' ? 's' : character
    }

    return data

}

module.exports = characterRecognizer