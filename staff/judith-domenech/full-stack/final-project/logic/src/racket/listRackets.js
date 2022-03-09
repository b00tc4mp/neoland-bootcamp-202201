const { models: { Racket } } = require('data')
const { validators: { validateId } } = require('commons')

function listRacket(racketId) {
    validateId(racketId, 'racketId')
    return Racket.findById(racketId)
        .then(rackets => {

            if(!rackets) throw new Error(`user with id ${racketId} does not exist`)

            return rackets
        })
}

module.exports = listRacket