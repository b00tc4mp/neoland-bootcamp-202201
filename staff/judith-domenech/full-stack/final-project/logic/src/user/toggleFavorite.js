const { models: { User, Racket } } = require('data')
const { validators: { validateId } } = require('commons')

function toggleFavorite(userId, racketId) {
    validateId(userId, 'userId')
    validateId(racketId, 'racketId')

    let racket

    return Racket.findById(racketId)
        .then(_racket => {
            racket = _racket
            return User.findById(userId)
            .then(user => {
                if(!user) throw new Error(`user with id ${userId} does not exist`)
                const index = user.favorites.indexOf(racketId)

            if (index === -1) user.favorites.push(racketId)
            else user.favorites.splice(index, 1)

            return user.save()
        })
        .then(user => {})
    })
}

module.exports = toggleFavorite

