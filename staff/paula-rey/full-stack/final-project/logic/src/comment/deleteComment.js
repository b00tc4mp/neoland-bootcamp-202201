const { validators: { validateId } } = require('commons')
const { models: { Comment } } = require('data')

function deleteComment(userId, commentId) {
    validateId(commentId, 'comment id')
    validateId(userId, 'user id')

    return Comment.deleteOne({ _id: commentId, user: userId })
        .then(result => {
            if (result.deletedCount === 0) throw new Error (`comment with id ${commentId} and user id ${userId} does not exist`)
        })
}

module.exports = deleteComment