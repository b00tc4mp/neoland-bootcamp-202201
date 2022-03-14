const { models: { Action, User } } = require('data')
const { validators: { validateId }, helpers: { sanitizeAction } } = require('commons')

function listUserPublicActions(userId, consultedUserId) {

    validateId(userId, 'userId')
    validateId(consultedUserId, 'consultedUserId')

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw Error(`user with id ${userId} not found`)
            return Action.find({ author: consultedUserId, public: true }).lean().populate('author')
        })
        .then(action => action.map(action => sanitizeAction(action)))
}

module.exports = listUserPublicActions