const { models: { Graffiti } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveGraffiti( graffitiId ) {
    validateId(graffitiId, 'graffitiId')

    return Graffiti.findById(graffitiId).lean()
        .then(graffiti => {
            if (!graffiti) throw new Error(`graffiti with id ${graffitiId} does not exist`)


            graffiti.id = graffiti._id.toString()

            delete graffiti._id 
            delete graffiti.__v 
            return graffiti
        })
}

module.exports = retrieveGraffiti