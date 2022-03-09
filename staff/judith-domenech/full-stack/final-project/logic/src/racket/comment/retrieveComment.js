const { models: { Comment } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveComment(commentId) {
    validateId(commentId, 'commentId')

    return Comment.findById(commentId)
        .then(comment => {
            if (!comment) throw new Error(`comment with id ${commentId} does not exist`)

            const doc = comment._doc

            // sanitize
            delete doc._id
            delete doc.__v

            return doc
        })
}

module.exports = retrieveComment