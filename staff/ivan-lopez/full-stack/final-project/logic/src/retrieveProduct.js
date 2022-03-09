const { validators: { validateId } } = require('commons')
const { models: { Product } } = require('data')

function retrieveProduct(userId, productId) {
    validateId(userId, 'userId')
    validateId(productId, 'productId') 

        return Product.findById(productId)
            .then(product => {
                const doc = note._doc

                    //sanitize
                    delete doc._id
                    delete doc.__v

                    return doc
                }
    }

module.exports = retrieveProduct