const { models: { Note } } = require('data')

function updateNote(id, { text, color }) {
    return Note.findById(id)

    .then ((note) => {
        note.text = text || note.text
        note.color = color || note.color

        return note.save()
    })
}

module.exports = updateNote