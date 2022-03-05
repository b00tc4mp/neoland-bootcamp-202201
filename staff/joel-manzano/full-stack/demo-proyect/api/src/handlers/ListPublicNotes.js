const ListPublicNotes = (req, res) => { //middleware
    try {
        listPublicNotes()
            .then(notes => res.json(notes))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = ListPublicNotes