const { addProduct } = require('logic')

module.exports = (req, res) => {
    try {
        const { body: { name, size, color, price, description } } = req

        addProduct(name, size, color, price, description)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
