const { validators: { validateId } } = require('commons')
const { models: { Graffiti } } = require('data')

function listGraffitis(userId) {
    validateId(userId, 'userId')

    return Graffiti.find({ user: userId })
        .then(graffitis => {
            const docs = graffitis.map(graffiti => {
                const doc = graffiti._doc

                doc.id = doc._id.toString()
                delete doc._id
                delete doc.__v
                delete doc.user

                return doc
            })

            return docs
        })
}

module.exports = listGraffitis