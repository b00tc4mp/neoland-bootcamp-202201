const { models: { Note } } = require ('data')
const { validators: { validateId } } = require('commons')

function listPublicNotesFromUser(userId) {
    validateId(userId)

    return Note.find({ user: user.Id, public: true })
    .then(notes => {
        const docs = notes.map(note => {
            const doc = note._doc

            doc.id = doc._id.toString()
                delete doc.id
                delete doc.__v

                delete doc.user
                return doc
        })
        
        return docs
    })
}

module.exports = listPublicNotesFromUser