const { validators: { validateId } } = require('commons')
const { models: { User, Tournament } } = require('data')

function listTournament(userId) {
    validateId(userId, 'userId')

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Tournament.find({ user: userId }).lean()
        })
        .then(tournaments => tournaments.map(tournament => {
                tournament.id = tournament._id.toString()
        
                delete tournament._id
                delete tournament.__v
                delete tournament.user
        
                return tournament
            }))
}

module.exports = listTournament
