const { validators: { validateId, validateString } } = require('commons')
const { models: { User, Graffiti } } = require('data')


function createGraffiti(userId, artist, description, image, city, address, postalCode, location, style, condition, spray, color  ) {
    validateId(userId, 'userId')
    validateString(artist, 'artist')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(city, 'city')
    validateString(address, 'address')
    validateString(postalCode, 'postal code') 
    validateString(location, 'location')
    validateString(style, 'style')
    validateString(condition, 'condition')
    validateString(spray, 'spray')
    validateString(color, 'color')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Graffiti.create({ user: userId, artist, description, image, city, address, postalCode, location, style, condition, spray, color })
        })
        .then(graffiti => { })
}

module.exports = createGraffiti