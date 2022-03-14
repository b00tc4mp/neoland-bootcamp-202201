const { validators: { validateId } } = require('commons')
const { models: { User, Recipe, Note } } = require('data')

function retrieveNote(userId, recipeId, noteId) {
    validateId(userId, 'user id')
    validateId(recipeId, 'recipe id')
    validateId(noteId, 'note id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Recipe.findById(recipeId)
        })
        .then(recipe => {
            if (!recipe) throw new Error(`recipe with id ${recipeId} not found`)

            return Note.findById(noteId)
        })
        .then(note => {
            if (!note) throw new Error(`note with id ${noteId} does not exist`)

            const doc = note._doc

            delete doc._id
            delete doc.__v

            return doc
        })
}


module.exports = retrieveNote