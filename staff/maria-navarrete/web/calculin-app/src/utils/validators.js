function validateNumber(value){
    if(typeof value !== 'number') throw new TypeError('value is not number')
    if(isNaN(value)) throw new TypeError('value is not number')

}

function validateString(string){
    if(typeof string !== 'string') throw new TypeError('text is not a string')
}

export {
    validateNumber, 
    validateString
}