const { validators: { validateId, validateString } } = require('commons')
const { models: { Comment } } = require('data')

function createComment(userId, locationId, text) {
    validateId(userId)
    validateId(locationId)
    validateString(text, 'text')


    return Comment.create({ user: userId, location: locationId, text })
        //.then(comment => { }) temporal*
        .then(comment => comment.id)
}

module.exports = createComment