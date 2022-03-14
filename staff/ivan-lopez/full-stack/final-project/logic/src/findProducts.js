const { models: { Product } } = require('data')
const { validators: { validateString } } = require('commons')


function findProducts(query) {
    validateString(query, 'query')

    const QUERY_REGEX = new RegExp(`${query}`, 'i')

    return Product.find({ name: QUERY_REGEX }).lean()
        .then(products => {
            products.forEach(product => {
                product.id = product._id.toString()

                delete product._id
                delete product.__v
            })

            return products
        })
}

module.exports = findProducts