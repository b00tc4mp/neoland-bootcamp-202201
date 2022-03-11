const { models: { Action } } = require('data')
const { validators: { validateId } } = require('commons')

function listUserActions(userId) {
    validateId(userId, 'userId')
    return Action.find({ author: userId })
        .then(actions => {
            const docs = actions.map(action => {
                const doc = action._doc
                doc.id = doc._id.toString()
                delete doc.author
                delete doc._id
                delete doc.__v

                return doc
            })
            return docs
        })
}

module.exports = listUserActions