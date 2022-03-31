const { validators: { validateId, validateString, validateBoolean } } = require('commons')
const { models: { Note } } = require('data')

function createNote(userId, text, color, public = false) {
    validateId(userId)
    validateString(text, 'text')
    validateString(color, 'color')
    validateBoolean(public, 'public')

    return Note.create({ user: userId, text, color, public })
        .then(note => { }) // return undefined
    // Si la respuesta de una llamada logic devuelve undefined y no arroja errores entonces es que esta todo bien
}

module.exports = createNote