const { models: { Note} } = require('data')
const { validators: { validateId , validateString } } = require('commons')

function updateNote(id, noteId, text, color ) {
    validateId(id)
    validateId(noteId)
    validateString(text, 'text')
    validateString(color, 'color')

    return Note.updateOne({ _id: noteId, user: id}, {text, color})
    .then(note => {})
}

module.exports = updateNote