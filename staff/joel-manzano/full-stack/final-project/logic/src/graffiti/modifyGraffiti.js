const { models: { Graffiti } } = require('data')
const { validators: { validateId, validateString, validateNumber } } = require('commons')

function modifyGraffiti(userId, graffitiId, artist, city, street, number, postal_code, location, style, description, image, status, spray, color = false) {
    validateId(userId, 'user id')
    validateString(artist, 'artist')
    validateString(city, 'city')
    validateString(street, 'street')
    validateNumber(number, 'number') 
    validateNumber(postal_code, 'postal code')
    validateString(location, 'location')
    validateString(style, 'style')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(status, 'status')
    validateString(spray, 'spray')
    validateString(color, 'color')

    return Graffiti.updateOne({ user: userId, _id: graffitiId, artist, city, street, number, postal_code, location, style, description, image, status, spray, color })
    .then(result => {
      if (result.matchedCount === 0) throw new Error(`user with id ${userId} does not exist`)
  

    })
}
module.exports = modifyGraffiti