const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFavorites(userId) {
    validateId(userId, 'user id')

    return User.findById(userId).populate('favorites')
        .then(user => {
            if (!user) throw Error(`user with id ${userId} does not exist`)

            return Promise.all(user.favorites.map(favorite => favorite.populate('author')))
        })
        .then(favorites => favorites.map(_favorite => {
                const favorite = _favorite._doc
                favorite.id = favorite._id.toString()
                favorite.authorId = favorite.author._id.toString()
                favorite.authorUserame = favorite.author.username

                delete favorite.author
                delete favorite._id
                delete favorite.__v
                delete favorite.public

                return favorite
            })
        )
}

module.exports = listFavorites