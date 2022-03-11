const { models: { User, Tournament } } = require('data')
const { validators: { validateId, validateString } } = require('commons')



function updateTournament(userId, tournamentId, title, description, location, image, _date) {
    validateId(userId, 'userId')
    validateId(tournamentId, 'tournament id')
    validateString(title, 'title')
    validateString(description, 'description')
    validateString(location, 'location')
    validateString(image, 'image')
    validateString(_date, 'date')

    const date = new Date(_date)

    // TODO check user exists and is admin

    return User.findById(userId)
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
            tournament.image = image
            tournament.date = _date

            return tournament.save()
        })
        .then(tournament => {})
}

module.exports = updateTournament

