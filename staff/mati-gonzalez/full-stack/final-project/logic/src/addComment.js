const { validators: { validateId, validateString } } = require('commons')
const { models: { Comment } } = require('data')

function addComment(userId, answerId, text) {
    
    validateId(userId, 'userId')
    validateId(answerId, 'answerId')
    validateString(text, 'text')

    return Comment.create({ user: userId, answer: answerId, text })
        .then(comment => comment.id)
}

module.exports = addComment
