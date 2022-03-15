const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFavorites(userId) {

    validateId (userId, 'userId')

    return User.findById(userId).lean().populate('favorites')
    .then(user => {

        if(!user) throw new Error(`user with id ${userId} does not exist`)
        
        const favorites = user.favorites.map(favorite => {
            
            favorite.id = favorite._id.toString()
            favorite.user = favorite.user.toString()

            delete favorite._id
            delete favorite.__v
            delete favorite.address
            delete favorite.city
           
            return favorite

        })
        return favorites
    })
}

module.exports = listFavorites