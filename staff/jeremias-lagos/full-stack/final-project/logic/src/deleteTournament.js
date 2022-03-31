const { validators: { validateId }} = require('commons')
const { models: { User, Tournament } } = require('data')

function deleteTournament(userId, tournamentId) {
    validateId(userId, 'user id')
    validateId(tournamentId, 'tournament id')


    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new Error(`user with id ${id} not found`)
            if (user.role !== 'admin') throw new Error(`user with id ${id} is not an admin`)

            return Tournament.deleteOne({ _id: tournamentId})
        })
        .then(result => {
            if (result.deleteCount === 0) throw new Error(`tournament with id ${id} not found`)
        })
}

module.exports = deleteTournament