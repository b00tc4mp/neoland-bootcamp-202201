const { validators: { validateId } } = require('commons')
const { models: { Note } } = require ('data')


function retrieveNote(noteId) {
    validateId(noteId)

    return Note.findById(noteId)
    .then(note => {
        if (!note) throw new Error(`note with id ${noteId} and user id ${userId} does not exist`)
        const doc = note._doc

        delete doc._id
        delete doc.doc.__v

        return doc
    })
}

module.exports = retrieveNote