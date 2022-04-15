const { validators: { validateId }} = require('commons')
const { models: { User }} = require('data')

function retrieveUser(id) {
    validateId(id)

    return User.findById(id)
        .then(user => {
            const doc = user._doc

            // sanitize
            delete doc._id
            delete doc.password
            delete doc.creditCards
            delete doc.__v

            return doc
        })
}

module.exports = retrieveUser