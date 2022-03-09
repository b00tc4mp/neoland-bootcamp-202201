const { models: { User, Location } } = require('data')
const { validators: { validateId } } = require('commons')

function listLocations(userId, locationId) {
    validateId (locationId, 'locationId')
    validateId (userId, 'userId')


    return User.findById(userId)
        .then(user => {

            if(!user) throw new Error(`user with id ${userId} does not exist`)

            return user.favorites
        })
}

module.exports = listLocations

/////////////////