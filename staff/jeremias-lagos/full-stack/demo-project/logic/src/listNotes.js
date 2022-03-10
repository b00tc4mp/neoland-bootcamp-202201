const { validators: { validateId } } = require('commons')
const { models: { Note } } = require('data')

function listNotes(userId) {
    validateId(userId, 'userId')

    return Note.find({ user: userId })
        .then(notes => {
            const docs = notes.map(note => {
                const doc = note._doc

                doc.id = doc._id.toString()
                delete doc._id
                delete doc.__v
                delete doc.user

                return doc
            })

            return docs
        })
}

module.exports = listNotes