const { validators: { validateId }} = require('commons')
const { models: { Note } } = require('data')

function deleteNote ( userId, noteId ) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')

    return Note.deleteOne({ _id: noteId, user: userId })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`note with id ${noteId} and user id ${userId} does not exist`)
        })
}

module.exports = deleteNote
