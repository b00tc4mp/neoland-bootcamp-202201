const { updateUser } = require('logic')
const jwt = require('jsonwebtoken')


module.exports = (req, res) => {
    try {
        const { headers: { authorization }, body: {name, email} } = req

        const [, token] = authorization.split(' ')

        const payload = jwt.verify(token, 'mi super secreto')

        const { sub: userId } = payload

        updateUser( userId, {name, email} )
            .then(() => res.status(200).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
