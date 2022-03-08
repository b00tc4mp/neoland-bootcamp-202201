const { validators: { validateId, validateString } } = require('commons')
const { models: { Comment } } = require('data')

function createCommnet(userId, text) {
    validateId(userId)
    validateString(text, 'text')

    return Comment.create({ user: userId, text })
        .then(comment => { })
}

module.exports = createCommnet