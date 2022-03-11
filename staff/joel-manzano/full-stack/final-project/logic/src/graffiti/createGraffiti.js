const { validators: { validateId, validateString, validateNumber } } = require('commons')
const { models: { Graffiti } } = require('data')

function createGraffiti(userId, artist, city, street, number, postal_code, location, style, description, image, status, spray, color  ) {
    
    validateId(userId, 'userId')
    validateString(artist, 'artist')
    validateString(city, 'city')
    validateString(street, 'street')
    validateNumber(number, 'number') // <= revisar validate string o number?
    validateNumber(postal_code, 'postal code') // <= revisar validate string o number?
    validateString(location, 'location')
    validateString(style, 'style')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(status, 'status')
    validateString(spray, 'spray')
    validateString(color, 'color')
    
    return Graffiti.create({ user: userId, artist, city, street, number, postal_code, location, style, description, image, status, spray, color })
        .then(graffiti => { })
}

module.exports = createGraffiti