const { validators: { validateId, validateString } } = require('commons')
const { models: { Comment } } = require('data')

function addComment(userId, text) {
    validateId(userId, 'userId')
    validateString(text, 'text')

    return Comment.create({ user: userId, text })
        .then(comment => { })
}

module.exports = addComment
