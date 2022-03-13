const { listProducts } = require('logic')


module.exports = (req, res) => {
    try {
        
        listProducts()
            .then(products => res.status(200).json(products))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}