const { validators: { validateId } } = require('commons')
const { models: { User, Location, Comment } } = require('data')

function retrieveComment(userId, locationId, commentId) {
    validateId(userId, 'user id')
    validateId(locationId, 'location id')
    validateId(commentId, 'comment id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Location.findById(locationId)
        })
        .then(location => {
            if (!location) throw new Error(`location with id ${locationId} not found`)

            return Comment.findById(commentId)
        })
        .then(comment => {
            if (!comment) throw new Error(`comment with id ${commentId} does not exist`)

            const doc = comment._doc

            delete doc._id
            delete doc.__v

            return doc
        })
}


module.exports = retrieveComment