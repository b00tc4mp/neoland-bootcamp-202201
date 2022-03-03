const handlerUpdateUserPassword = (req, res) => {
const jwt = require('jsonwebtoken')

    try {
        const { headers: { authorization }, body: { currPassword, newPassword } } = req

        const [, token] = authorization.split(' ')

        const payload = jwt.verify(token, 'mi super secreto')

        const { sub: id } = payload

        updateUserPassword(id, currPassword, newPassword)
            .then(() => res.status(200).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerUpdateUserPassword