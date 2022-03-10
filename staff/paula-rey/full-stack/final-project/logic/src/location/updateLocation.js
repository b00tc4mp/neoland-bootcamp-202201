const { models: { Location } } = require('data')
const { validators: { validateId, validateString } } = require('commons')

function updateLocation(userId, locationId, type, name, image, address, city) {
  validateId(userId, 'user id')
  validateId(locationId, 'location id')
  validateString(type, 'type')
  validateString(name, 'name')
  validateString(image, 'image')
  validateString(address, 'address')
  validateString(city, 'city')

  return location.findOne({ _id: locationId, user: userId, type, name, image, address, city })
    .then(location => {
      if (!location) throw new Error(`location with id ${locationId} does not exist`)

      location.type = type
      location.name = name
      location.image = image
      location.address = address
      location.city = city
      location.updatedAt = new Date

      return location.save()

    })
    .then(location => {})
}

module.exports = updateLocation


//testear

