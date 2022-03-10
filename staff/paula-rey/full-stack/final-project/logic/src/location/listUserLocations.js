const { validators: { validateId } } = require('commons')
const { models: { Location } } = require('data')

function listUserLocations(userId) {
    validateId(userId)

    return Location.find({ user: userId })
        .then(location => {

            const docs = location.map(location => {
                const doc = location._doc

                doc.id = doc._id.toString()
                delete doc._id
                delete doc.user
                delete doc.__v

                return doc
            })

            return docs
        })
}

module.exports = listUserLocations

//testear!!!