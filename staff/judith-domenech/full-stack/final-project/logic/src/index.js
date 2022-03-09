const registerUser = require("./user/registerUser")
const authenticateUser = require("./user/authenticateUser")
const updateUser = require("./user/updateUser")
const deleteUser = require("./user/deleteUser")
const retrieveUser = require("./user/retrieveUser")
const updateUserPassword = require("./user/updateUserPassword")
const createComment = require("./racket/comment/createComment")
const toggleFavorite = require("./user/toggleFavorite")
const deleteComment = require("./racket/comment/deleteComment")
const retrieveComment = require('./racket/comment/retrieveComment')
const listFavorites = require("./user/listFavorites")
const listComments = require("./racket/comment/listComments")

module.exports = {
  registerUser,
  authenticateUser,
  updateUser,
  deleteUser,
  retrieveUser,
  updateUserPassword,
  createComment,
  toggleFavorite,
  deleteComment,
  retrieveComment,
  listFavorites,
  listComments

}