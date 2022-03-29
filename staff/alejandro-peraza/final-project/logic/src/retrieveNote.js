const { validators: { validateId } } = require('commons')
const { models: { User, Recipe, Note } } = require('data')

function retrieveNote(userId, recipeId) {
    validateId(userId, 'user id')
    validateId(recipeId, 'recipe id')

    return Promise.all([User.findById(userId), Recipe.findById(recipeId)])
        .then(([user, recipe]) => {
            if (!user) throw new Error(`user with id ${userId} not found`)
            if (!recipe) throw new Error(`recipe with id ${recipeId} not found`)

            return Note.findOne({ user: userId, recipe: recipeId }).lean()
        })
        .then(note => {
           /*  if (!note) throw new Error(`note with id ${noteId} does not exist`) */

           /*  note.id = note._id.toString()
            delete note._id
            delete note.__v */

            return note
        })
}


module.exports = retrieveNote