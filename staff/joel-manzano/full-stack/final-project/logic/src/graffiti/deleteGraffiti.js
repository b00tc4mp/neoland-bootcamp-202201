const { validateId } = require('commons/src/validators')
const { models: { Graffiti } } = require('data')

function deleteGraffiti (userId, graffitiId) {
    validateId(userId, 'user id')
    validateId(graffitiId, 'graffiti id')

    return Graffiti.deleteOne({ _id: graffitiId, user: userId })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`graffiti with id ${graffitiId} and user id ${userId} does not exist`)
            
        })
}

module.exports = deleteGraffiti