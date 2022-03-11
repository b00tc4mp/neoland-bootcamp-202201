const { validators: { validateId } } = require('commons')
const { models: { Recipe } } = require('data')
const { User } = require('data/src/models')

function retrieveFavRecipes(userId) {
    validateId(userId, 'userId')
  
    return User.findById(userId).populate('favs').lean()
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            const [ favs ] = user

            favs.forEach(fav => {
                fav.id = fav._id.toString()

                delete fav._id
                delete fav.__v
            })
            
            return favs
        })
}

module.exports = retrieveFavRecipes


