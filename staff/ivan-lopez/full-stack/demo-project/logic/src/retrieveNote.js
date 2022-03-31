const { models: { Note } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveNote(id) {
    validateId(id)

    return Note.findById(id)
        .then(note => {
            const doc = note._doc

            //sanitize
            delete doc._id
            delete doc.__v

            return doc
        })
}

module.exports = retrieveNote