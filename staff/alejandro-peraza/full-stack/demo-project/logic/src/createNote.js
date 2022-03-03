const { models: { Note } } = require('data')
const { validators: { validateId, validateString, validateBoolean } } = require('commons')

function createNote(userId, text, color = "yellow", public = false) {
    validateId(userId, 'userId')
    validateString(text, 'text')
    validateString(color, 'color')
    validateBoolean(public, 'public')

    return Note.create({ user: userId, text, color, public })
        .then(note => { })
}

module.exports = createNote