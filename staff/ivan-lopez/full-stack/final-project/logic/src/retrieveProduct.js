const { validators: { validateId } } = require('commons')
const { models: { Product } } = require('data')

function retrieveProduct(productId) {
    validateId(productId, 'productId')

    return Product.findById(productId).lean()
        .then(product => {
            if (!product) throw new Error(`product with id ${productId} does not exist`)
            
    
                //sanitize
                delete product.user
                delete product._id
                delete product.__v

                return product

            })

}

module.exports = retrieveProduct