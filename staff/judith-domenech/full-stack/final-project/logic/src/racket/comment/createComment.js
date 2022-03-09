const { validators: { validateId, validateString } } = require('commons')
const { models: { Comment } } = require('data')

function createCommnet(userId, racketId, text) {
    validateId(userId)
    validateId(racketId)
    validateString(text, 'text')

    return Comment.create({ user: userId, racket: racketId, text })
        .then(comment => comment.id)
}

module.exports = createCommnet