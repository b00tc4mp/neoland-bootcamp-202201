const { models: { Comment } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveComment(commentId) {
    validateId(commentId, 'commentId')

    return Comment.findById(commentId).lean().populate('user')
        .then(comment => {
            if (!comment) throw new Error(`comment with id ${commentId} does not exist`)

            comment.id = comment._id.toString()
            delete comment._id
            delete comment.__v
            comment.user = comment.user.name

            return comment
        })
}

module.exports = retrieveComment