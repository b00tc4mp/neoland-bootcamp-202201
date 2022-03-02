const { models: { Note } } = require('data')
const { validators: { validateId }} = require('commons')

function retrieveNote(noteId) {
    validateId(noteId, 'note id')

    return Note.findOne({_id: noteId, public: true})
        .then((note) => {
            const doc = note._doc

            delete doc._id
            delete doc.__v
            delete doc.public
            
            return doc
        })
        
}


module.exports = retrieveNote