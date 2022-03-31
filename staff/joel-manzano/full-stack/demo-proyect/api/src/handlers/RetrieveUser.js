
const { retrieveUser } = require('logic')
const jwt = require('jsonWebToken')
    

const RetrieveUser = (req, res) => {
    try {
        const { headers: { authorization } } = req
        const [, token] = authorization.split(' ')
        const payload = jwt.verify(token, 'mi secreto')
        const { sub: id } = payload

        retrieveUser(id)
            .then(user => res.json(user))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = RetrieveUser