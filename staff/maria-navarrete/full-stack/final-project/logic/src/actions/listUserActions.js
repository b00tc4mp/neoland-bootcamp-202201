const { models: { Action } } = require('data')
const { validators: { validateId } } = require('commons')

function listUserActions(userId) {
    validateId(userId)
    return Action.find({ author: userId })
        .then(actions => {
            return actions
        })
}

module.exports = listUserActions