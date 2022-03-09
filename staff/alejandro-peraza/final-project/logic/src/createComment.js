const { validators: { validateId, validateString } } = require('commons')
const { models: { Comment } } = require('data')

function createComment(userId, text) {
    validateId(userId, 'userId')
    validateString(text, 'text')
    

    return Comment.create({ user: userId, text })
        .then(Comment => { })
}

module.exports = createComment