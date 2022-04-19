const { updateUser } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')


module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        
        const { body: {name, email} } = req

        updateUser( userId, name, email )
            .then(() => res.status(200).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

