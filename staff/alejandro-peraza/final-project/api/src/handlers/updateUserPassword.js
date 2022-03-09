const { verifyTokenAndGetUserId } = require('../helpers')
const { updateUserPassword } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        
        const { body: { currPassword, newPassword  } } = req

        updateUserPassword(userId, currPassword, newPassword)
            .then(() => res.status(200).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


/*const { verifyTokenAndGetUserId } = require('../helpers')
const { updateUserPassword } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        
        const { body: { currpassword, newpassword  } } = req

        updateUserPassword(userId, currpassword, newpassword)
            .then(() => res.status(200).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}*/