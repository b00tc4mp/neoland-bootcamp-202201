const { listProducts } = require('logic')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    try {
        const { headers: { authorization } } = req

        const [, token] = authorization.split(' ')

        const payload = jwt.verify(token, 'mi super secreto')

        const { sub: userId } = payload

        listProducts(userId)
            .then(products => res.status(200).json(products))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
