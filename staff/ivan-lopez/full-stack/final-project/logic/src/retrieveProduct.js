const { validators: { validateId } } = require('commons')
const { models: { Product } } = require('data')

function retrieveProduct(userId, productId) {
    validateId(userId, 'userId')
    validateId(productId, 'productId') 

        return Product.findById(productId)
            .then(product => {
                if(!product) throw new Error(`product with id ${productId} does not exist`)
                const doc = product._doc

                    //sanitize
                    delete doc._id
                    delete doc.__v

                    return doc
                }
    )}

module.exports = retrieveProduct