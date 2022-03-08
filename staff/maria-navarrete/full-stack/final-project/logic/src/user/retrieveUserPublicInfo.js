const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveUserPublicInfo(userId) {
    validateId(userId, 'userId')
    return User.findById(userId)
        .then(user => {

            if(!user) throw new Error(`user with id ${userId} does not exist`)

            const doc = user._doc

            delete doc._id
            delete doc.email
            delete doc.password
            delete doc.favs
            delete doc.notifications
            delete doc.friends
            delete doc.schedules
            delete doc.__v

            return doc
        })
}

module.exports = retrieveUserPublicInfo