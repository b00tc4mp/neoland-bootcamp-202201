const { validators: { validateId }} = require('commons')
const { models: { Product } } = require('data')

function deleteProduct ( userId, productId ) {

    validateId(userId, 'user id')
    validateId(productId, 'product id')

    return Product.deleteOne({ user: userId, _id: productId })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`product with id ${productId} and user id ${userId} does not exist`)
        })
}

module.exports = deleteProduct