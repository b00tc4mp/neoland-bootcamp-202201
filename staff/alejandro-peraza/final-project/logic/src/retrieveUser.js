const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveUser(userId) {
    validateId(userId, 'userId')
    
    /*return User.findById(userId)
        .then(user => {*/
        return User.findById(userId).lean()

        .then(user => {
            if (!user) throw new Error(`user with id ${userId} do not exist`)
        
            //sanitize
            delete user.id
            delete user.password
            delete user.__v

            return user
        })
}

module.exports = retrieveUser