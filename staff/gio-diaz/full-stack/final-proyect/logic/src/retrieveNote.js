const { validators: { validateId }} = require('commons')
const { models: { User, Note }} = require('data')


function retrieveNote(userId, noteId) {
    validateId(userId)
    validateId(noteId)
    
    // return User.findById(userId).populate({ path: 'notes', mood: { $gte: 1 } }) // Suposición y si no me llamas
    return User.findById(userId)
        .populate('notes') // Suposición y si no me llamas
        .then(user => {
           
            return Note.findById(noteId)
            
            // lo que tengas que hacer.......... user.nostes.....findOne.... 
        
        .then(noteId => noteId)
    })
}

module.exports = retrieveNote