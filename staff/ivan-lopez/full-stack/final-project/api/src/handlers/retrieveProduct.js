const { retrieveProduct } = require('logic')


module.exports = (req, res) => {
    try {
        const { params: { productId } } = req
        
        retrieveProduct(productId)
            .then(product => res.status(200).json(product))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}