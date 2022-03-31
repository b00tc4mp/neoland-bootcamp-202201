const { models: { User, Tournament } } = require('data')
const { validators: { validateId, validateString, validateDate } } = require('commons')



function updateTournament(userId, tournamentId, title, description, location, date) {
    validateId(userId, 'userId')
    validateId(tournamentId, 'tournament id')
    validateString(title, 'title')
    validateString(description, 'description')
    validateString(location, 'location')  
    validateDate(date, 'date') 

    return User.findById(userId).lean()
        .then(user => {
            if(!user) throw new Error(`user with ${userId} not found`)
            if (user.role !== 'admin') throw new Error(`user with id ${id} is not an admin`)

            return Tournament.findById(tournamentId)
        })
        .then(tournament => {
            if (!tournament) throw new Error(`tournament with id ${tournamentId} not found`)

            tournament.title = title
            tournament.description = description
            tournament.location = location
            tournament.date = date

            return tournament.save()
        })
        .then(tournament => {})
}

module.exports = updateTournament

