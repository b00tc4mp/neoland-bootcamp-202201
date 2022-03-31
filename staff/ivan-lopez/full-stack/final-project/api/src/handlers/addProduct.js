const { addProduct } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')


module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        const { body: { name, image, size, color, price, description } } = req

        addProduct(userId, name, image, size, color, price, description)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}