const { models: { Note } } = require('data')

function listPublicNotes() {
    return Note.find({ public: true }).populate('user')
    .then(notes => {
        const docs = notes.map(note => {
            const doc = note._doc

            doc.id = doc._id.toString()
            delete doc.id
            delete doc.__v

            doc.userId = doc._id
            doc.userName = doc.user.name

            delete doc.user
            return doc
        })

        return docs
    })
}

module.exports = listPublicNotes