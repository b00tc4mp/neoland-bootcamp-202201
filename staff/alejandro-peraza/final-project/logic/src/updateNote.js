const { models: { Note } } = require("data")
const { validators: { validateId, validateString, validateBoolean } } = require('commons')


function updateNote(userId, noteId, text, color, public = false) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')
    validateString(text, 'text')
    validateString(color, 'color')
    validateBoolean(public, 'public')

    return Note.updateOne({ _id: noteId, user: userId }, { text, color, public, updatedAt: new Date })
        .then(result => {
            if (result.modifiedCount === 0) throw new Error(`note with id ${noteId} and userId ${userId} does not exist`)
        })
}

module.exports = updateNote