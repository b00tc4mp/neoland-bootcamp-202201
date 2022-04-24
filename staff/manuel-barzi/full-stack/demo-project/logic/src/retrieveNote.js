const { validators: { validateId } } = require('commons')
const { models: { Note } } = require('data')

function retrieveNote(userId, noteId) {
    validateId(userId)
    validateId(noteId)

    return Note.findById(noteId).populate('user')
        .then(note => {
            if (!note) throw new Error(`note with id ${noteId} does not exist`)

            //if (note.user._id.toString() === userId || note.public) {
            if (note.user.id === userId || note.public) {
                const doc = note._doc

                delete doc._id
                delete doc.__v

                doc.userId = doc.user.id
                doc.userName = doc.user.name

                delete doc.user

                return doc
            } else throw new Error(`note with id ${noteId} is not public`)
        })
}

module.exports = retrieveNote