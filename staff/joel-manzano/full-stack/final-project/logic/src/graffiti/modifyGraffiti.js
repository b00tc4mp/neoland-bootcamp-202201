const { models: { Graffiti } } = require('data')
const { validators: { validateId, validateString, validateNumber } } = require('commons')
const { User } = require('data/src/models')
const { graffiti } = require('data/src/schemas')

function modifyGraffiti(userId, graffitiId, artist, city, street, number, postalCode, location, style, description, image, status, spray, color = false) {
    validateId(userId, 'user id')
    validateString(artist, 'artist')
    validateString(city, 'city')
    validateString(street, 'street')
    validateNumber(number, 'number') 
    validateNumber(postalCode, 'postal code')
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

        return Graffiti.findById(graffitiId)
      })
    .then(graffiti => {
      if (!graffiti) throw new Error(`graffiti with id ${graffitiId} not found`)

      if (graffiti.user.toString() !== userId) throw new Error(`graffity with id ${graffitiId} does not correspond to user with id ${userId}`)
  
      graffiti.artist  = artist
      graffiti.city = city
      graffiti.street = street
      graffiti.number = number
      graffiti.postalCode = postalCode
      graffiti.location = location
      graffiti.style = style
      graffiti.description = description
      graffiti.image = image
      graffiti.status = status
      graffiti.spray = spray
      graffiti.color = color

      return graffiti.save()
    })
    .then(graffiti => {})
}
module.exports = modifyGraffiti