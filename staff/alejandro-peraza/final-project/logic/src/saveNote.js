const { validators: { validateId, validateString } } = require('commons')
const { models: { Note, User, Recipe } } = require('data')


function saveNote(userId, recipeId, text) {
    validateId(userId, 'userId')
    validateId(recipeId, 'recipeId')
    validateString(text, 'text')

    return Promise.all([
        User.findById(userId).lean(),
        Recipe.findById(recipeId).lean()
    ])
    .then(([user, recipe]) => {
        if(!user) throw new Error(`user with id ${userId} does not exist`)
        if(!recipe) throw new Error(`racket with id ${recipeId} does not exist`)
      
        return Note.findOne({ user: userId, recipe: recipeId })
    })
    .then(note => {
        if (!note) {
            return Note.create({ user: userId, recipe: recipeId, text })
        } else {
            note.text = text
            debugger
            return note.save()
        }
    })
    .then(note => note.id)
}

module.exports = saveNote

// Hay que hacer un logic que le pases el recipeId y devuelva el array de notes que haya para esa receta
// Hacer el handler del api y el enrutamiento
// hacer el logic de app