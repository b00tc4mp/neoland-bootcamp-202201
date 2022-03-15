const { models: { User, Graffiti } } = require('data')
const { validators: { validateId, validateString } } = require('commons')




function modifyGraffiti(userId, graffitiId, artist, description, image, city, address, postalCode, location, style, status, spray, color ) {
    validateId(userId, 'user id')
    validateId(graffitiId, 'graffiti id')
    validateString(artist, 'artist')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(city, 'city')
    validateString(address, 'address') 
    validateString(postalCode, 'postal code')
    validateString(location, 'location')
    validateString(style, 'style')
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
      graffiti.description = description
      graffiti.image = image
      graffiti.city = city
      graffiti.address = address
      graffiti.postalCode = postalCode
      graffiti.location = location
      graffiti.style = style
      graffiti.status = status
      graffiti.spray = spray
      graffiti.color = color

      return graffiti.save()
    })
    .then(graffiti => {})
}

module.exports = modifyGraffiti