const { models: { Product } } = require('data')
const { validators: { validateString } } = require('commons')


function findProducts(query, description) {
    if (query !== null) validateString(query, 'name')
    if (description !== null) validateString(description, 'description')
   
    const criteria = {}

    if (query) {
        const QUERY_REGEX = new RegExp(query, 'i')

        criteria.$or = [
            { name: QUERY_REGEX },
            { description: QUERY_REGEX }
        ]
    }

    if (description) criteria.description = new RegExp(description, 'i')


    return Product.find(criteria).lean()
        .then(products => products.map(product => {
                product.id = product._id.toString()

                delete product._id
                delete product.__v

            return product
        }))
}

module.exports = findProducts