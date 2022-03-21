const { models: { Comment } } = require('data')

function listComments(answerId) {
    return Comment.find({ answer: answerId }).lean().populate('user').populate('answer')
        .then(_comments => {
            const comments = _comments.map(comment => {
                // debugger
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

            return comments
        })
}

module.exports = listComments