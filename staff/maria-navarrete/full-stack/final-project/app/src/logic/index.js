const registerUser = require('./user/registerUser')
const authenticateUser = require('./user/authenticateUser')
const retrieveUser = require('./user/retrieveUser')
const retrieveUserPublicInfo = require('./user/retrieveUserPublicInfo')
const listFavorites = require('./user/listFavorites')
const listFriends = require('./user/listFriends')
const findUsers = require('./user/findUsers')
const toggleFavorite = require('./user/toggleFavorite')
const toggleFriend = require('./user/toggleFriend')
const updateUser = require('./user/updateUser')
const updateUserPassword = require('./user/updateUserPassword')
const deleteUser = require('./user/deleteUser')
const createAction = require('./actions/createAction')
const updateAction = require('./actions/updateAction')
const retrieveAction = require('./actions/retrieveAction')
const listUserPublicActions = require('./actions/listUserPublicActions')
const listUserActions = require('./actions/listUserActions')
const findActions = require('./actions/findActions')
const deleteAction = require('./actions/deleteAction')
const createSchedule = require('./schedules/createSchedule')
const retrieveSchedule = require('./schedules/retrieveSchedule')
const listSchedules = require('./schedules/listSchedules')
const updateSchedule = require('./schedules/updateSchedule')
const cancelSchedule = require('./schedules/cancelSchedule')

module.exports={
    registerUser,
    authenticateUser,
    retrieveUser,
    retrieveUserPublicInfo,
    listFavorites,
    listFriends,
    findUsers,
    toggleFavorite,
    toggleFriend,
    updateUser,
    updateUserPassword,
    deleteUser,
    createAction,
    retrieveAction,
    listUserPublicActions,
    listUserActions,
    updateAction, 
    findActions,
    deleteAction, 
    createSchedule,
    retrieveSchedule,
    listSchedules,
    updateSchedule,
    cancelSchedule,
}