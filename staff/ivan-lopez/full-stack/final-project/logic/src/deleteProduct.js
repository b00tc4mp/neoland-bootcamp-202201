const { validators: { validateId }} = require('commons')
const { models: { Product } } = require('data')

function deleteProduct ( userId ) {
    validateId(userId, 'user id')
    

    return Product.deleteOne({ user: userId })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`user id ${userId} does not exist`)
        })
}

module.exports = deleteProduct
