const { validators: { validateId } } = require('commons')
const { models: { Note } } = require ('data')


function retrieveNote(userId, noteId) {
    validateId(noteId)
    validateId(userId)

    return Note.findById(noteId).populate('userId')
    .then(note => {
        if (!note) throw new Error(`note with id ${noteId} and user id ${userId} does not exist`)

        if (note.user.toString() === userId || note.public) {
            const doc = note._doc
            
            delete doc._id
            delete doc.__v

            doc.userId = doc.user._id
            doc.userName = doc.user.userName

            delete doc.user
            
            return doc
        } else throw new Error (`note with ${noteId} is not public`)
    })
}

module.exports = retrieveNote