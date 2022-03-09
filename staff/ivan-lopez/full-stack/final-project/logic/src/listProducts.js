const { validators: { validateId } } = require('commons')
const { models: { Product } } = require('data')

function listProducts(userId) {
    validateId(userId, 'userId')

    return Product.find({ user: userId})
        .then(products => {

            const docs = products.map(product => {
                const doc = product._doc

                //sanitize
                doc.id = doc._id.toString()
                delete doc._id
                delete doc.user
                delete doc.__v

                return doc
            })

            return docs
        })
}

module.exports = listProducts