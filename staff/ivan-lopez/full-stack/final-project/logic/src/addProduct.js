const { models: { Product } } = require('data')
const { validators: { validateString } } = require('commons')

function addProduct(name, size, color, price, description) {
    validateString(name, 'name')
    validateString(size, 'size')
    validateString(color, 'color')
    validateString(price, 'price')
    validateString(description, 'description')

    return Product.create({ name, size, color, price, description })
        .then(product => {})
}

module.exports = addProduct