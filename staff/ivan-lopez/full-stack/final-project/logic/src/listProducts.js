const { models: { Product } } = require('data')

function listProducts() {
    return Product.find({}).lean()
        .then(products => {
            products.forEach(product => {
                //sanitize
                product.id = product._id.toString()

                delete product._id
                delete product.user
                delete product.__v

                return product
            })

            return products
        })
}

module.exports = listProducts