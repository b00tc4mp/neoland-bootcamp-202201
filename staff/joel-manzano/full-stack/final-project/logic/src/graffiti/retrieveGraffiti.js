const { models: { Graffiti } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveGraffiti(userId, graffitiId) {
    validateId(userId, 'userId')
    validateId(graffitiId, 'graffitiId')

    return Graffiti.findById(graffitiId)
        .then(graffiti => {

            if(!graffiti) throw new Error(`graffiti with id ${graffitiId} does not exist`)
           
                const doc = graffiti._doc

                delete doc._id
                delete doc.__v
                return doc
            }
           
        )}
module.exports = retrieveGraffiti