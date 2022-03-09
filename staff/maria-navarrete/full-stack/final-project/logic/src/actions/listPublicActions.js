const { models: { Action } } = require('data')
const { validators: { validateId } } = require('commons')

function listPublicActions(userId) {
    validateId(userId)
    return Action.find({public: true, author: userId} )
        .then(actions => {
            return actions
        })
}

module.exports = listPublicActions