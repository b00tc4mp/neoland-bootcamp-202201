const { models: { Graffiti } } = require('data')
const { validators: { validateId } } = require('commons')
const { User } = require('data/src/models')

function retrieveGraffiti(userId, graffitiId) {
    validateId(userId, 'userId')
    validateId(graffitiId, 'graffitiId')

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Graffiti.findById(graffitiId).lean()
        })
        .then(graffiti => {
            if (!graffiti) throw new Error(`graffiti with id ${graffitiId} does not exist`)


            graffiti.id = graffiti._id.toString()

            delete graffiti._id 
            delete graffiti.__v 
            return graffiti
        })
}

module.exports = retrieveGraffiti