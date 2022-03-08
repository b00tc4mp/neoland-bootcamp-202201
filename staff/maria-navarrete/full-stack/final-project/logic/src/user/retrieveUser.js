const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveUser(userId) {
    validateId(userId, 'userId')
    return User.findById(userId)
        .then(user => {

            if(!user) throw new Error(`user with id ${userId} does not exist`)

            const doc = user._doc

            delete doc._id
            delete doc.password
            delete doc.__v

            return doc
        })
}

module.exports = retrieveUser