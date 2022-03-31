const { verifyTokenAndGetUserId } = require('../helpers')
const { updateUser } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        
        const { body: { name, email } } = req

        updateUser(userId, name, email)
            .then(() => res.status(200).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}