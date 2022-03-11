const { deleteGraffiti } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        const { params: { graffitiId } } = req

        deleteGraffiti(userId, graffitiId)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}