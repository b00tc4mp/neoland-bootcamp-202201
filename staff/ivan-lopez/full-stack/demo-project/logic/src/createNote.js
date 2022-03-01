const { validators: { validateId, validateString } } = require('commons')
const { models: { Note } } = require('data')

function createNote(userId, text, color) {
    validateId(userId)
    validateString(text, 'text')
    validateString(color, 'color')

    return Note.create({ user: userId, text, color })
        .then(note => {}) // return undefined
    // Si la respuesta de una llamada logic devuelve undefined y no arroja errores entonces es que esta todo bien
}

module.exports = createNote