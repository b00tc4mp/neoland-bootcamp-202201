const registerUser = require("./registerUser")
const authenticateUser = require("./authenticateUser")
const updateUser = require("./updateUser")
const deleteUser = require("./deleteUser")
const retrieveUser = require("./retrieveUser")
const updateUserPassword = require("./updateUserPassword")
const createTournament = require("./createTournament")
const updateTournament = require("./updateTournament")
const deleteTournament = require("./deleteTournament")
const listTournament = require("./listTournament")
const retrieveTournament = require("./retrieveTournament")
const registerAdmin = require("./registerAdmin")

module.exports = {
  registerUser,
  authenticateUser,
  updateUser,
  deleteUser,
  retrieveUser,
  updateUserPassword,
  createTournament,
  updateTournament,
  deleteTournament,
  listTournament,
  retrieveTournament,
  registerAdmin
}