const { models: { Action } } = require('data')
const { validators: { validateId }, helpers: { sanitizeAction } } = require('commons')

function listUserPublicActions(userId) {
    validateId(userId, 'userId')
    return Action.find({ author: userId, public: true }).populate('author')
        .then(actions => {
            const docs = actions.map(action => {
                const doc = sanitizeAction(action)
                return doc
            })
            return docs
        })
}

module.exports = listUserPublicActions