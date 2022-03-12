const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFavorites(userId) {

    validateId (userId, 'userId')

    return User.findById(userId).lean().populate('favorites')
    .then(user => {

            if(!user) throw new Error(`user with id ${userId} does not exist`)

            const docs = user.favorites.map(favorite => {
                
                favorite.id = favorite._id.toString()
                favorite.user = favorite.brand.toString()
                delete favorite._id
                delete favorite.__v
                delete favorite.description
                delete favorite.nivel
                delete favorite.player

                return favorite
            })

            return docs
        })
}

module.exports = listFavorites