const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFavorites(userId) {

    validateId(userId, 'userId')

    return User.findById(userId).lean().populate('favs')
        .then(user => {
            if (!user) throw Error(`user with id ${userId} does not exist`)

            return user.favs.map(fav => {
                fav.id = fav._id.toString()
                fav.author = fav.author.toString()
                delete fav._id
                delete fav.__v
                delete fav.public

                return fav
            })
        })
}

module.exports = listFavorites