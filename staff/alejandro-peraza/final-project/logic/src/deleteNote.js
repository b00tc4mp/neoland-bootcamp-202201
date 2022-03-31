const { models: { Note }} = require('data')
const { validators: { validateId }} = require('commons')

function deleteNote(userId, recipeId) {
    validateId(userId, 'user id')
    validateId(recipeId, 'recipe id')
    
    return Note.deleteOne({ user: userId, _id: recipeId })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`note with id ${noteId} and user id ${userId} does not exist`)
        })
}

module.exports = deleteNote