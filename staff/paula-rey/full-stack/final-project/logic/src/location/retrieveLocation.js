const { validators: { validateId } } = require('commons')
const { models: { Location } } = require('data')

function retrievelocation(locationId) {
    validateId(locationId, 'location id')

    return Location.findById(locationId)
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

//testear