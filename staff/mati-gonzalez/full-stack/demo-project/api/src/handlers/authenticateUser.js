const { authenticateUser } = require ('logic')
const { createTokenWithUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        const { body: { email, password } } = req

        authenticateUser(email, password) // this authenticateUser comes from logic
            .then(id => {
                const token = createTokenWithUserId(userId)

                res.json({ token })
            })
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}