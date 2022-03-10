const  { validators: { validateId, validateString }} = require('commons');
const { models: { Product } } = require('data')

function updateProduct(userId, productId, name, size, color, price, description ) {
    validateId(userId, 'user id')
    validateId(productId, 'product id')
    validateString(name, 'name')
    validateString(size, 'size')
    validateString(color, 'color')
    validateString(price, 'price')//REVIEW VALIDATENUMBER REQUIRED
    validateString(description, 'description')
//TRAERME PARAMS: PRODUCT ID
    return Product.updateOne({ _id: userId, name, size, color, price, description })
        .then(result => {
            if (result.matchedCount === 0) throw new Error(`user with id ${userId} does not exist`)
        })
}

module.exports = updateProduct