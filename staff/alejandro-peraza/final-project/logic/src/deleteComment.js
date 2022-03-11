const { models: { Comment }} = require('data')
const { validators: { validateId }} = require('commons')

function deleteComment(userId, recipeId) {
    validateId(userId, 'user id')
    validateId(recipeId, 'recipe id')
    
    return Comment.deleteOne({ user: userId, _id: recipeId })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`note with id ${commentId} and user id ${userId} does not exist`)
        })
}

module.exports = deleteComment