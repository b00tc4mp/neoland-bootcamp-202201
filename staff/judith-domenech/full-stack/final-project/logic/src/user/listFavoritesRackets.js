const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFavoritesRackets(userId) {
    validateId(userId, 'user Id')

    return User.findById(userId).lean().populate('favorites').populate('favorites.brand')
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} does not exist`)

            const { favorites } = user

            favorites.forEach(favorite => {
                favorite.id = favorite._id.toString()

                favorite.brand.id = favorite.brand._id.toString()

                delete favorite._id
                delete favorite.brand._id
                delete favorite.__v
                delete favorite.description
                delete favorite.nivel
                delete favorite.player
            })

            return favorites
        })
}

module.exports = listFavoritesRackets