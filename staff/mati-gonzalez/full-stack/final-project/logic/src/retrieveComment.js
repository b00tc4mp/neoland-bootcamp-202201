const { models: { Comment } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveComment(userId, commentId) {
    validateId(userId, 'userId')
    validateId(commentId, 'commentId')

    return Comment.findById(commentId).lean().populate('user').populate('answer')
        .then(comment => {
            if (!comment) throw new Error(`comment with id ${commentId} does not exist`)
            
            comment.id = comment._id.toString()

            comment.userId = comment.user._id.toString()
            comment.userName = comment.user.username

            comment.answerId = comment.answer._id.toString()
            comment.answer = comment.answer.text

            delete comment.__v
            delete comment._id
            delete comment.user

            delete comment.answer.id
            delete comment.answer.date

            return comment
        })
}

module.exports = retrieveComment