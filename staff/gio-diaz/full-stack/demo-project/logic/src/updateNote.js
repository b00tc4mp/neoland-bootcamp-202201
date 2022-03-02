const { validators: { validateId, validateString } } = require ('commons')
const {models: { Note } } = require ('data')

function updateNote (id, text, color) {
    validateId(id)
    validateString(text, 'text')
    validateString(color, 'color')

    return Note.findById (id)
    .then ((note) => {
    note.text = text || note.text;
    note.color = color || note.color;

    return note.save()
})
}

module.exports = updateNote

// function updateUser(id, {name, email}) {
    
//    return User.updateOne({_id: id}, { name, email })
    
// }
    