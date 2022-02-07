function validateNumber(value) {
    if(typeof value !== "number" || isNaN(value)) throw new TypeError('num is not number')
}

function validateString(text) {
    if(typeof text !== "string") throw new TypeError('num is not string')
}

export{
    validateNumber,
    validateString
}