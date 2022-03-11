const { validators: { validateId, validateString } } = require('commons')
const { models: { Location } } = require('data')

function createLocation(userId, type, title, image, address, city) {
    validateId(userId, 'userId')
    validateString(type, 'type')
    validateString(title, 'title')
    validateString(image, 'image')
    validateString(address, 'address')
    validateString(city, 'city')

    return Location.create({ user: userId, type, title, image, address, city })
        //.then(location => { }) temporal*
        .then(location => location.id)
}

module.exports = createLocation

//testear!!

