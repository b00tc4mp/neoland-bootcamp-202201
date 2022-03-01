const { validateId, validateString } = require('commons/src/validators');
const { models: { Note } } = require('data')

function updateNote(id,  text, color ) {
    validateId(id)
    validateString()

    return Note.findById(id)
    .then ((note) => {
        note.text = text || note.text; 
        note.color = color || note.color;


        return note.save();
    })


}

module.exports = updateNote