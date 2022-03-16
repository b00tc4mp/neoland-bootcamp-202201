const { models: { User, Recipe, Note } } = require("data")
const { validators: { validateId, validateString } } = require('commons')


function updateNote(userId, recipeId, noteId, text) {
    validateId(userId, 'user id')
    validateId(recipeId, 'recipe id')
    validateId(noteId, 'note id')
    validateString(text, 'text')


    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`User with id ${userId} does not exist`)
            return Recipe.findById(recipeId)
                .then(recipe => {
                    if (!recipe) throw new Error(`Recipe with id ${recipeId} does not exist`)
                        

                    return Note.updateOne({ recipeId: recipeId, user: userId, _id: noteId, text })
                        .then(result => {
                            if (result.modifiedCount === 0) throw new Error(`note with id ${noteId} and userId ${userId} does not exist`)
                        })
                })
        })
}
module.exports = updateNote