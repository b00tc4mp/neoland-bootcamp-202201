const { models: { Location } } = require('data')
const { validators: { validateId, validateString } } = require('commons')



function updateLocation(userId, locationId, type, title, image, address, city) {
  validateId(userId, 'user id')
  validateId(locationId, 'location id')
  validateString(type, 'type')
  validateString(title, 'title')
  validateString(image, 'image')
  validateString(address, 'address')
  validateString(city, 'city')
  
  return Location.updateOne({ user: userId, _id: locationId}, {type, title, image, address, city })
  .then(location => {
    if (!location) throw new Error(`location with id ${locationId} does not exist`)
  })
  .then(location => {})
}

module.exports = updateLocation








  // function updateLocation(userId, locationId, type, title, image, address, city) {
  //   validateId(userId, 'user id')
  //   validateId(locationId, 'location id')
  //   validateString(type, 'type')
  //   validateString(title, 'title')
  //   validateString(image, 'image')
  //   validateString(address, 'address')
  //   validateString(city, 'city')
  
  //   return Location.findOne({ _id: locationId, user: userId, type, title, image, address, city })
  //     .then(location => {
  //       if (!location) throw new Error(`location with id ${locationId} does not exist`)
  
  //       location.type = type
  //       location.title = title
  //       location.image = image
  //       location.address = address
  //       location.city = city
  //       location.updatedAt = new Date
  
  //       return location.save()
  
  //     })
  //     .then(location => {})
  // }
