const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveUser(id) {
    validateId(id)

    return User.findById(id).lean()
        .then(user => {
            if(!user) throw new Error('user with id ${userId} does not exist')

            //sanitize
            delete user._id
            delete user.password
            delete user.__v

            return user
        })
}

module.exports = retrieveUser