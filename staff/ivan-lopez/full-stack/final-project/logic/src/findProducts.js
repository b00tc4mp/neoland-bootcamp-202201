const { models: { Product } } = require('data')
const { validators: { validateString } } = require('commons')


function findProducts(query=null) {
    if (query !== null) validateString(query, 'query')

    const criteria = {}

    if (query) {
        const QUERY_REGEX = new RegExp(query, 'i')

        criteria.$or = [
            { name: QUERY_REGEX },
            { description: QUERY_REGEX },
            { color: QUERY_REGEX },
            { size: QUERY_REGEX }
        ]
    }

    return Product.find(criteria).lean()
        .then(products => products.map(product => {
            product.id = product._id.toString()

            delete product._id
            delete product.__v

            return product
        }))
}

module.exports = findProducts