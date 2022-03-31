const { validators: { validateId, validateString } } = require('commons');
const { models: { User, Product } } = require('data')

function updateProduct(userId, productId, name, image, size, color, price, description) {
    validateId(userId, 'user id')
    validateId(productId, 'product id')
    validateString(name, 'name')
    validateString(image, 'image')
    validateString(size, 'size')
    validateString(color, 'color')
    validateString(price, 'price')
    validateString(description, 'description')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${id} not found`)
            if (user.role !== 'admin') throw new Error(`user with id ${id} is not an admin`)

            return Product.findById(productId)
        })
        .then(product => {
            if (!product) throw new Error(`product with id ${productId} not found`)

            product.name = name
            product.image = image
            product.size = size
            product.color = color
            product.price = price
            product.description = description

            return product.save()
        })
        .then(product => {})
}

module.exports = updateProduct