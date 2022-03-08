const { models: { Note } } = require("data")
const { validators: { validateId, validateString, validateBoolean } } = require('commons')


function updateNote(userId, recipeId, text = false) {
    validateId(userId, 'user id')
    validateId(recipeId, 'recipe id')
    validateString(text, 'text')
    

    return Note.updateOne({ _id: recipeId, user: userId }, { text, updatedAt: new Date })
        .then(result => {
            if (result.modifiedCount === 0) throw new Error(`note with id ${noteId} and userId ${userId} does not exist`)
        })
}

module.exports = updateNote