const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveUser(userId) {

    validateId(userId, 'userId')
    
    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw Error(`user with id ${userId} does not exist`)

            delete user._id
            delete user.password
            delete user.__v

            return user
        })
}

module.exports = retrieveUser