const { updateProduct } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        
        const userId = verifyTokenAndGetUserId(req)
        const { body: { name, size, color, price, description }, params: { productId} } = req

        updateProduct(userId, productId, name, size, color, price, description)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}