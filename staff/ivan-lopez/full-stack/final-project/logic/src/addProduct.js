const { models: { User, Product } } = require('data')
const { validators: { validateString, validateId } } = require('commons')


function addProduct(userId, name, size, color, price, description) {
    validateId(userId, 'user')
    validateString(name, 'name')
    validateString(size, 'size')
    validateString(color, 'color')
    validateString(price, 'price')
    validateString(description, 'description')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)
            if (user.role !== 'admin') throw new Error(`user with id ${userId} is not an admin`)

            return Product.create({ name, size, color, price, description })
        })
        .then(product => {})
}

module.exports = addProduct