const { validators: { validateId, validateString } } = require('commons')
const { models: { Comment } } = require('data')

function createComment(userId, text) {
    validateId(userId, 'userId')
    validateString(text, 'text')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`User with id ${userId} does not exist`)
    

    return Comment.create({ user: userId, text })
        .then(Comment => { })
})
}

module.exports = createComment

