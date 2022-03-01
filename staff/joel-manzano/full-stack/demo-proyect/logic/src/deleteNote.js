const { validateId } = require('commons/src/validators')
const { models: { Note } } = require('data')

function deleteNote (id) {
    validateId(id)

    return Note.deleteOne({ id: id})
}

module.exports = deleteNote