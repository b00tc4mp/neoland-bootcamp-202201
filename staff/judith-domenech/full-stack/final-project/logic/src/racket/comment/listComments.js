const { models: { Comment } } = require('data')
const { validators: { validateId }} = require('commons')

function listComments(racketId) {
    validateId(racketId)

    return Comment.find({ racket: racketId })
        .then(comments => {
            const docs = comments.map(comment => {
                const doc = comment._doc

                // sanitize
                doc.id = doc._id.toString()
                delete doc._id
                delete doc.__v

                delete doc.racket

                return doc
            })

            return docs
        })
}

module.exports = listComments