const { models: { Tournament } } = require('data')
const { validators: { validateId, validateString} } = require('commons')


function updateTournament(userId, tournamentId, title, description, location, image, _date) {
    validateId(userId, 'userId')
    validateId(tournamentId, 'tournament id')
    validateString(title, 'title')
    validateString(description, 'description')
    validateString(location, 'location')
    validateString(image, 'image')
    validateString(_date, 'date')

    const date = new Date(_date)

    return Tournament.updateOne({ user: userId, _id: tournamentId, title, description, location, image, date })
    .then(result => {
        if (result.matchedCount === 0) throw new Error(`user with id ${userId} does not exist`)
    
    })
   
}

module.exports = updateTournament

