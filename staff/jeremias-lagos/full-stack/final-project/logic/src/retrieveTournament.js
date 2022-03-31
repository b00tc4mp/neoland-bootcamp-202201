const { validators: { validateId } } = require('commons')
const { models: { User, Tournament } } = require('data')


function retrieveTournament(userId, tournamentId) {
    validateId(userId, 'userId')
    validateId(tournamentId, 'tournamentId')

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Tournament.findById(tournamentId).lean()
        })
        .then(tournament => {
            if (!tournament) throw new Error(`tournament with id ${tournamentId} does not exist`)

            delete tournament.user
            delete tournament._id
            delete tournament.__v

            return tournament
        })
}

module.exports = retrieveTournament