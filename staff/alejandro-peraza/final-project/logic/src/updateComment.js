const { models: { Comment } } = require("data")
const { validators: { validateId, validateString } } = require('commons')


function updateComment(userId, recipeId, text) {
    validateId(userId, 'user id')
    validateId(recipeId, 'recipe id')
    validateString(text, 'text')


    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`User with id ${userId} does not exist`)

    return Comment.updateOne({ _id: recipeId, user: userId }, { text, updatedAt: new Date })
        .then(result => {
            if (result.modifiedCount === 0) throw new Error(`note with id ${commentId} and userId ${userId} does not exist`)
        })
}

module.exports = updateComment