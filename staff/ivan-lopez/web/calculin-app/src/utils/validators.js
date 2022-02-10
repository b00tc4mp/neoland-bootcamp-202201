function validateNumber(value) {
    if (typeof value !== 'number' || isNaN(value)) throw new TypeError('value is not number')
}

function validateString(text) {
    if (typeof text !== 'string') throw new TypeError('text is not a string')
}

export {
    validateNumber,
    validateString
}