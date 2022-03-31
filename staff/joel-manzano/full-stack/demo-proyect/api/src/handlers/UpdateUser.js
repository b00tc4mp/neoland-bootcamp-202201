const { updateUser } = require('logic')
const jwt = require('jsonwebtoken')

const UpdateUser = (req, res) => {
    try { 
        const { headers: { authorization }, body } = req

        const[, token] = authorization.split(' ')

        const payload = jwt.verify(token, 'mi secreto')

        const { sub: id } = payload

        updateUser(id, body)
            .then(() => res.status(200).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}

module.exports = UpdateUser