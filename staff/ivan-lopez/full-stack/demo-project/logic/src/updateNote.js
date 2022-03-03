const  { validators: { validateId, validateString, validateBoolean }} = require('commons');
const { models: { Note } } = require('data')

function updateNote(userId, noteId, text, color, public = false ) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')
    validateString(text, 'text')
    validateString(color, 'color')
    validateBoolean(public, 'public')

    return Note.findOne({ _id: noteId, user: userId })
        .then ((note) => {
            if (!note) throw new Error(`note with id ${noteId} and user id ${userId} does not exist`)

        note.text = text
        note.color = color
        note.public = public
        note.updatedAt = new Date

        return note.save();
    })
    .then(note => {})

}

module.exports = updateNote