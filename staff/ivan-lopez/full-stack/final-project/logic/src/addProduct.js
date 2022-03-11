const { models: { Product } } = require('data')
const { validators: { validateString, validateId } } = require('commons')
const { User } = require('data/src/models')

function addProduct(userId, name, size, color, price, description) {
    validateId(userId, 'userId')    // TODO validate user id
    validateString(name, 'name')
    validateString(size, 'size')
    validateString(color, 'color')
    validateString(price, 'price')
    validateString(description, 'description')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${id} not found`)
            if (user.role !== 'admin') throw new Error(`user with id ${id} is not an admin`)

            return Product.create({ name, size, color, price, description })
        })
        .then(product => {})
}

module.exports = addProduct