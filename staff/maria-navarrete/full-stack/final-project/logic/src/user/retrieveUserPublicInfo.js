const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')


function retrieveUserPublicInfo(userId, consultedUserId) {

    validateId(userId, 'user id')

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw Error(`user with id ${userId} not found`)
            return User.findById(consultedUserId).select('username').lean()
        })
        .then(consultedUserId => {
            if (!consultedUserId) throw Error(`user with id ${consultedUserId} does not exist`)

            consultedUserId.id = consultedUserId._id.toString()
            delete consultedUserId._id
            delete consultedUserId.__v

            return consultedUserId
        })
}


module.exports = retrieveUserPublicInfo