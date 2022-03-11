const { registerAdmin } = require('logic')

module.exports = (req, res) => {
    try {
        const { body: { name, email, password } } = req

        registerAdmin(name, email, password)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}