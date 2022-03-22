const { findQuestions } = require('logic')

module.exports = (req, res) => {
    try {
        // Preguntar a manu como pasar varias categor'ias por query
        // puden ser 2, 7, o 1
        const { query: { category } } = req
        const categories = [category]
        findQuestions(categories)
            .then(questions => res.json(questions))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}