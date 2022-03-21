const { models: { User, Graffiti } } = require('data')
const { validators: { validateId } } = require('commons')

function toggleFavorite(userId, graffitiId) {
    validateId(userId, 'user id')
    validateId(graffitiId, 'graffiti id')

    //let graffiti

    return Graffiti.findById(graffitiId).lean()
        .then(graffiti => {
            if (!graffiti) throw new Error(`graffiti with id ${graffitiId} does not exist`)
            return User.findById(userId)
        })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} does not exist`)
            if (!user.favorites){
                user.favorites = []
            }
            const index = user.favorites.indexOf(graffitiId)

            if (index === -1) user.favorites.push(graffitiId)
            else user.favorites.splice(index, 1)
            return user.save()       
        })
        .then(user => { })
    
}

module.exports = toggleFavorite