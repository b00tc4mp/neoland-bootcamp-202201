const { models: { Note } } = require("data")
const { validators: { validateId, validateString } } = require('commons')


function updateNote(userId, recipeId, text) {
    validateId(userId, 'user id')
    validateId(recipeId, 'recipe id')
    validateString(text, 'text')


return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`User with id ${userId} does not exist`)

    return Note.updateOne({ _id: recipeId, user: userId, text })
        .then(result => {
            if (result.modifiedCount === 0) throw new Error(`note with id ${noteId} and userId ${userId} does not exist`)
        })
})
}

module.exports = updateNote