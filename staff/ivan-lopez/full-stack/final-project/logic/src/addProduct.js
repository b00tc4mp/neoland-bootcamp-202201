const { models: { Product } } = require('data')
const { validators: { validateString } } = require('commons')

function addProduct(name, size, color, price, description) {
    validateString(name, 'name')
    

    return Product.create({ name, size, color, price, description })
        .then(product => {})
}

module.exports = addProduct