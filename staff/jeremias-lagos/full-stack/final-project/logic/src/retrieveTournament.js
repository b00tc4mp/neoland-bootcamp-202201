const { validators: { validateId } } = require('commons')
const { models: { Tournament } } = require('data')

function retrieveTournament(userId, tournamentId) {
    validateId(userId, 'userId')
    validateId(tournamentId, 'tournamentId')

        return Tournament.findById(tournamentId)
            .then(tournament => {
                if(!tournament) throw new Error(`tournament with id ${tournamentId} does not exist`)
                const doc = tournament._doc

                    delete doc._id
                    delete doc.__v

                    return doc
            }

    )}
    
module.exports = retrieveTournament