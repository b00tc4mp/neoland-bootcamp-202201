const { validators: { validateId, validateString } } = require('commons')
const { models: { Note, User, Recipe } } = require('data')


function createNote(userId, recipeId, text) {
    validateId(userId)
    validateId(recipeId)
    validateString(text, 'text')

    return Promise.all([
        User.findById(userId).lean(),
        Recipe.findById(recipeId).lean()
    ])

    .then(([user, recipe]) => {
        if(!user) throw new Error(`user with id ${userId} does not exist`)
        if(!recipe) throw new Error(`racket with id ${recipeId} does not exist`)
        return Note.create({ user: userId, recipe: recipeId, text })
    })

    .then(note => note.id)
}

module.exports = createNote