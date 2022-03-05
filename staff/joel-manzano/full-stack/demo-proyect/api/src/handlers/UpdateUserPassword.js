const { updateUserPassword } = require('logic')
const jwt = require('jsonwebtoken')


const UpdateUserPassword = (req, res) => { //middleware
    try {
        const { headers: { authorization }, body: {currPassword, newPassword } } = req
        const [, token] = authorization.split(' ')
        const payload = jwt.verify(token, 'mi secreto')
        const { sub: id } = payload

        updateUserPassword({ id, currPassword, newPassword })
            .then(() => res.status(200).send())
            .catch(error => { throw error })

    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = UpdateUserPassword