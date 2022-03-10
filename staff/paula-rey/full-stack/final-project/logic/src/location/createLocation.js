const { validators: { validateId, validateString } } = require('commons')
const { models: { Location } } = require('data')

function createLocation(userId, type, name, image, address, city) {
    validateId(userId, 'userId')
    validateString(type, 'type')
    validateString(name, 'name')
    validateString(image, 'image')
    validateString(address, 'address')
    validateString(city, 'city')

    return Location.create({ user: userId, type, name, image, address, city })
        //.then(location => { })
        .then(location => location.id)
}

module.exports = createLocation

//testear!!

