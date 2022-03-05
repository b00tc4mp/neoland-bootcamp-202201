const { models: { Note } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveNote(userId, noteId) {
    validateId(userId, 'userId')
    validateId(noteId, 'noteId')

    return Note.findById(noteId).populate('user')
        .then(note => {

            if (!note) throw new Error(`note with id ${noteId} does not exist`)

            if (note.user._id() === userId || note.public) {
                const doc = note._doc

                doc.id = doc._id.toString()

                delete doc._id
                delete doc.__v

                doc.userId = doc.user.id
                doc.userName = doc.user.userName

                delete doc.user

                return doc
            }

            else throw new Error (`note with id ${noteId} is not public`)
        })
}

module.exports = retrieveNote