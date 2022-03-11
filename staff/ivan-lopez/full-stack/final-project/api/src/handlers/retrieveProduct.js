const { retrieveProduct } = require('logic')
//const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {

        //const userId = verifyTokenAndGetUserId(req)
        const { params: { productId } } = req
        
        retrieveProduct(productId)
            .then(product => res.status(200).json(product))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}