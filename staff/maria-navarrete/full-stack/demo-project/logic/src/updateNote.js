const { models: { Note } } = require("data")
const {validators: {validateId, validateString}} = require('commons')


function updateNote(id, text, color) {
    validateId(id)
    validateString(text, 'text')
    validateString(color, 'color')
    
    return Note.updateOne({ _id: id }, { text, color })
}

module.exports = updateNote