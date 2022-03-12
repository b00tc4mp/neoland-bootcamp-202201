const { validators: { validateId } } = require('commons')
const { models: { Location, User } } = require('data')

function retrievelocation(userId, locationId) {
    validateId(userId, 'user id')
    validateId(locationId, 'location id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Location.findById(locationId)
        })
        .then(location => {
            if(!location) throw new Error(`location with id ${locationId} does not exist`)

            const doc = location._doc
            
            delete doc.user
            delete doc._id
            delete doc.__v
    
            return doc
            
        })
}


module.exports = retrievelocation

