const { models: { Action, User } } = require('data')
const { validators: { validateId } } = require('commons')

function listUserActions(userId) {

    validateId(userId, 'userId')

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw Error(`user with id ${userId} not found`)
            return Action.find({ author: userId }).lean()
        })
        .then(actions => actions.map(action => {
            action.id = action._id.toString()
            delete action.author
            delete action._id
            delete action.__v

            return action
        }))
}

module.exports = listUserActions