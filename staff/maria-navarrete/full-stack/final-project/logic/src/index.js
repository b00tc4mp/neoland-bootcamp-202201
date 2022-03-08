const authenticateUser = require('./user/authenticateUser')
const deleteUser = require('./user/deleteUser')
const listFavorites = require('./user/listFavorites')
const listFriends = require('./user/listFriends')
const listUsers = require('./user/listUsers')
const registerUser = require('./user/registerUser')
const retrieveUser = require('./user/retrieveUser')
const retrieveUserPublicInfo = require('./user/retrieveUserPublicInfo')
const toggleFavorite = require('./user/toggleFavorite')
const toggleFriend = require('./user/toggleFriend')
const updateUser = require('./user/updateUser')
const updateUserPassword = require('./user/updateUserPassword')

module.exports={
    authenticateUser,
    deleteUser,
    listFavorites,
    listFriends,
    listUsers,
    registerUser,
    retrieveUser,
    retrieveUserPublicInfo,
    toggleFavorite,
    toggleFriend,
    updateUser,
    updateUserPassword
}