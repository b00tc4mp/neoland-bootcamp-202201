const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFavorites(userId) {
    validateId(userId, 'userId')
    return User.findById(userId).populate('favs')
        .then(user => {
            if(!user) throw new Error(`user with id ${userId} does not exist`)

            const docs = user.favs.map(fav =>{
                const doc = fav._doc
                doc.id = doc._id.toString()
                doc.author = doc.author.toString()
                delete doc._id
                delete doc.__v
                delete doc.public

                return doc
            })
            return docs
        })
}

module.exports = listFavorites