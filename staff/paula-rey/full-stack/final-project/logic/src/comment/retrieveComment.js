const { validators: { validateId } } = require('commons')
const { models: { Comment } } = require('data')

function retrieveComment(commentId) {
    validateId(commentId, 'comment id')

    return Comment.findById(commentId)
        .then(comment => {
            if(!comment) throw new Error(`comment with id ${commentId} does not exist`)

                const doc = comment._doc

                delete doc._id
                delete doc.__v
    
                return doc
            
        })
}


module.exports = retrieveComment