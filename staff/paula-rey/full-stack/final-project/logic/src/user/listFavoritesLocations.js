const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFavoritesLocations(userId) {
    validateId(userId, 'user id')

    return User.findById(userId).populate('favorites')
        .then(user => {
            if (!user) throw Error(`user with id ${userId} does not exist`)

            return Promise.all(user.favorites.map(favorite => favorite.populate('user')))
        })
        .then(favorites => favorites.map(location => {
                const favorite = location._doc
                favorite.id = favorite._id.toString()
                favorite.userId = favorite.user._id.toString()
                favorite.userName = favorite.user.name

                delete favorite.user
                delete favorite._id
                delete favorite.__v
                delete favorite.address
                delete favorite.city

                return favorite
            })
        )
}

module.exports = listFavoritesLocations



// const { models: { User } } = require('data')
// const { validators: { validateId } } = require('commons')

// function listFavoritesLocations(userId) {

//     validateId (userId, 'userId')

//     return User.findById(userId).lean().populate('favorites')
//     .then(user => {

//         if(!user) throw new Error(`user with id ${userId} does not exist`)
        
//         const favorites = user.favorites.map(favorite => {
            
//             favorite.id = favorite._id.toString()
//             favorite.user = favorite.user.toString()

//             delete favorite._id
//             delete favorite.__v
//             delete favorite.address
//             delete favorite.city
           
//             return favorite

//         })
//         return favorites
//     })
// }

// module.exports = listFavoritesLocations
