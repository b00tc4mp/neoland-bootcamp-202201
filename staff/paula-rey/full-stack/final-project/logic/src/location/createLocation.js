const { validators: { validateId, validateString } } = require('commons')
const { models: { Location } } = require('data')

function createLocation(userId, name, image, address, city) {
    validateId(userId)
    validateString(name, 'name')
    validateString(image, 'image')
    validateString(address, 'address')
    validateString(city, 'city')

    return Location.create({ user: userId, name, image, address, city })
        then(note => { })
}

module.exports = createLocation

///??????????????????????????????

