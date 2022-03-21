const { models: { Comment} } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')


function deleteComment(userId, commentId) {
    validateId(userId)
    validateId(commentId)
    

    return Comment.deleteOne({ user: userId, _id: commentId })
                .then(result => {
                    if (result.deletedCount === 0) throw new Error(`wrong user ${userId} or password`)
                    else {

                    }
                })
    }

module.exports = deleteComment