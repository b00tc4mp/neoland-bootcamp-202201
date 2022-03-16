const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require('./deleteUser')
const createTournament = require('./createTournament')
const updateTournament = require('./updateTournament')
const deleteTournament = require('./deleteTournament')
const listTournament = require('./listTournament')
const retrieveTournament = require('./retrieveTournament')
const registerAdmin = require('./registerAdmin')
const searchTournaments = require('./searchTournaments')


module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    deleteUser,
    createTournament,
    updateTournament,
    deleteTournament,
    listTournament,
    retrieveTournament,
    registerAdmin,
    searchTournaments
}