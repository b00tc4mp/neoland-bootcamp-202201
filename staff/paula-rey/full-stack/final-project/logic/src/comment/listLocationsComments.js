const { models: { Comment } } = require('data')     
const { validators: { validateId }} = require('commons')

function listLocationsComments(locationId) {
    validateId(locationId)

    return Comment.find({ location: locationId })
        .then(comments => {

            const docs = comments.map(comment => {
                const doc = comment._doc

                doc.id = doc._id.toString()
                delete doc._id
                delete doc.__v

                delete doc.location

                return doc
            })

            return docs
        })
}

module.exports = listLocationsComments