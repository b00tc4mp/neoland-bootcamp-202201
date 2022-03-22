const { listComments } = require('logic')
// const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        const { params: { answerId } } = req
        listComments(answerId)
            .then(listComments => res.json(listComments))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}