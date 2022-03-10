const { validators: { validateId } } = require('commons')
const { models: { Tournament } } = require('data')

function listTournament(userId) {
    validateId(userId, 'userId')

    return Tournament.find({ user: userId})
            .then(tournament => {

                const docs = tournament.map(tournament => {
                    const doc = tournament._doc

                    doc.id = doc._id.toString()
                    delete doc._id
                    delete doc.user
                    delete doc.__v

                    return doc
                })

                return docs
            })
}

module.exports = listTournament
