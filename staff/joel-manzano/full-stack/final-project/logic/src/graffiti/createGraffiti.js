const { validators: { validateId, validateString, validateNumber } } = require('commons')
const { models: { User, Graffiti } } = require('data')
const { User } = require('data/src/models')

function createGraffiti(userId, artist, city, street, number, postalCode, location, style, description, image, status, spray, color  ) {
    validateId(userId, 'userId')
    validateString(artist, 'artist')
    validateString(city, 'city')
    validateString(street, 'street')
    validateNumber(number, 'number') // <= revisar validate string o number?
    validateNumber(postalCode, 'postal code') // <= revisar validate string o number?
    validateString(location, 'location')
    validateString(style, 'style')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(status, 'status')
    validateString(spray, 'spray')
    validateString(color, 'color')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Graffiti.create({ user: userId, artist, city, street, number, postalCode, location, style, description, image, status, spray, color })
        })
        .then(graffiti => { })
}

module.exports = createGraffiti