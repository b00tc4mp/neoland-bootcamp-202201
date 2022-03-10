const { models: { Tournament } } = require('data')
const { validators: { validateId, validateString } } = require('commons')

function createTournament(user, title, description, location, image, _date) {
    validateId(user, 'user')
    validateString(title, 'title')
    validateString(description, 'description')
    validateString(location, 'location')
    validateString(image, 'image')
    validateString(_date, 'date')

    const date = new Date(_date)

    return Tournament.create({ user, title, description, location, image, date })
        .then(tournament => { })
}

module.exports = createTournament