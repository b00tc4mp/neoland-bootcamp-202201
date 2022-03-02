const { models: { Note } } = require('data')
const { validators: { validateId, validateString, validateBoolean } } = require('commons')

function updateNote(userId, noteId, text, color, public = false) {
  validateId(userId, 'user id')
  validateId(noteId, 'note id')
  validateString(text, 'text')
  validateString(color, 'color')
  validateBoolean(public, 'public')

  return Note.findOne({ _id: noteId, user: userId })
    .then(note => {
      if (!note) throw new Error(`note with id ${noteId} and user id ${userId} does not exist`)

      note.text = text
      note.color = color
      note.public = public
      note.updatedAt = new Date

      return note.save()

    })
    .then(note => {})
}

module.exports = updateNote

////OTHER FORM////////////
// function updateNote(id, noteId, text, color) {
//   validateId(id, 'id')
//   validateId(noteId, 'note id')
//   validateString(text, 'text')
//   validateString(color, 'color')

//   return Note.updateOne({_id: noteId, user: id}, {text, color})
//     .then(note => {})
// }


