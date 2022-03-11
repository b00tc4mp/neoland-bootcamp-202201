const { validators: { validateId }} = require('commons')
const { models: { User, Product } } = require('data')

function deleteProduct ( userId, productId ) {
    validateId(userId, 'user id')
    validateId(productId, 'product id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${id} not found`)
            if (user.role !== 'admin') throw new Error(`user with id ${id} is not an admin`)

            return Product.deleteOne({ _id: productId})
        })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`product with id ${id} not found`)
        })
}

module.exports = deleteProduct