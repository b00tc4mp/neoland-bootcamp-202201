const { validators: { validateId }} = require('commons')
const { models: { Tournament } } = require('data')

function deleteTournament(userId, tournamentId) {
    validateId(userId, 'user id')
    validateId(tournamentId, 'tournament id')

    return Tournament.deleteOne( { user: userId, _id: tournamentId, })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`user id ${userId} does not exist`)
        })
}

module.exports = deleteTournament