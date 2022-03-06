const { authenticateUser } = require('logic')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    try {
        const { body: { email, password } } = req

        authenticateUser(email, password)
            .then(userId => {
                const token = jwt.sign({ sub: userId, exp: Math.floor(Date.now() / 1000) + 10 * 60 }, 'mi super secreto')

                res.json({ token })
            })
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

