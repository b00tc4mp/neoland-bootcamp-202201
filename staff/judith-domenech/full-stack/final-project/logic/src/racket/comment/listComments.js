const { models: { Comment } } = require('data')
const { validators: { validateId } } = require('commons')

function listComments(racketId) {
    validateId(racketId)

    return Comment.find({ racket: racketId }).lean().populate('user')
        .then(_comments => {
            
            if (!_comments) throw new Error(`comments with id ${_comments} does exist`)

            const comments = _comments.map(comment => {

                comment.id = comment._id.toString()
                delete comment._id
                delete comment.__v
                delete comment.racket
                comment.user = comment.user.name

                return comment
            })

            return comments
        })
}

module.exports = listComments