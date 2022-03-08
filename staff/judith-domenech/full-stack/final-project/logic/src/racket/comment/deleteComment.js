const { validators: { validateId } } = require('commons')
const { models: { Comment } } = require('data')

function deleteComment(userId, commentId) {
    validateId(commentId, 'user id')
    validateId(userId, 'note id')

    return Comment.deleteOne({ _id: commentId, user: userId })
        .then(result => {
            if (result.deletedCount === 0) throw new Error (`note with id ${commentId} and user id ${userId} does not exist`)
        })
}

module.exports = deleteComment