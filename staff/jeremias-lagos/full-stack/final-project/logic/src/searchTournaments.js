const { models: { Tournament } } = require('data')
const { validators: { validateString, validateDate } } = require('commons')

function searchTournaments(query, location, date) {
    if (query !== null) validateString(query, 'title')
    if (location !== null) validateString(location, 'location')
    if (date !== null) validateDate(date, 'date')

    const criteria = {}

    
    if (query) {
        const queryRegex = new RegExp(query, 'i')

        criteria.$or = [
            { title: queryRegex },
            { description: queryRegex }
        ]
    }

    if (location) criteria.location = new RegExp(location, 'i')
    
    if (date) {
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
    
        const minDate = new Date(year, month, day)
        const maxDate = new Date(year, month, day + 1)

        criteria.date = {
            $gte: minDate,
            $lt: maxDate
        }
    }

    return Tournament.find(criteria).lean()
        .then(tournaments => tournaments.map(tournament => {
                tournament.id = tournament._id.toString()

                delete tournament._id
                delete tournament.__v

                return tournament
            }))
}

module.exports = searchTournaments
