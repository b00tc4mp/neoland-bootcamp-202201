const { validateId } = require('commons/src/validators')
const { models: { Graffiti } } = require('data')
const { User } = require('data/src/models')
const { graffiti } = require('data/src/schemas')

function deleteGraffiti (userId, graffitiId) {
    validateId(userId, 'user id')
    validateId(graffitiId, 'graffiti id')

    /*
    return Graffiti.deleteOne({ _id: graffitiId, user: userId })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`graffiti with id ${graffitiId} and/or user id ${userId} does not exist`)
            
        })
        */
    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Graffiti.findById(graffitiId)
        })
        .then(graffiti => {
            if (!graffiti) throw new Error(`graffiti with id ${graffitiId} not found`)

            if (graffiti.user.toString() !== userId) throw new Error(`graffiti with id ${graffitiId} does not correspond to user with id ${userId}`)

            return Graffiti.deleteOne({ _id: graffitiId })
        })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`could not delete graffiti with id ${graffitiId}`)
        })
}

module.exports = deleteGraffiti