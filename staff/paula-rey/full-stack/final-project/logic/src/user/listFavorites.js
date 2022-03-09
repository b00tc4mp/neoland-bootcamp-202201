const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFavorites(userId) {
    validateId (userId, 'userId')

    return User.findById(userId).populate('favorites')
        .then(user => {

            if(!user) throw new Error(`user with id ${userId} does not exist`)

            const docs = user.favorites.map(favorite => {
                const doc = favorite._doc
                doc.id = doc._id.toString()
                doc.user = doc.user.toString()
                delete doc._id
                delete doc.__v
                delete doc.address
                delete doc.city

                return doc
            })

            return docs
        })
}

module.exports = listFavorites