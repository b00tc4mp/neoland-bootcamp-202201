const { validators: { validateId } } = require('commons')
const { models: { Location, Comment } } = require('data')

function deleteLocation(locationId, userId) {
    validateId(locationId, 'location id')
    validateId(userId, 'user id')
        
    return Location.findOne({_id: locationId, userId})
    .then((location) => {
        if (!location) throw new Error(`location with id ${locationId} and user id ${userId} does not exist`)
        return Comment.deleteMany({user: userId, location: locationId})
    })   
    .then(() => Location.deleteOne({ _id: locationId, user: userId }))
    .then(result => {
        if (result.deletedCount === 0) throw new Error(`location with location id ${locationId} and user id ${userId} can't be deleted`)
    })
    
}

module.exports = deleteLocation

//testear



