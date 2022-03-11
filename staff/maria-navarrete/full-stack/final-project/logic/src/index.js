const authenticateUser = require('./user/authenticateUser')
const deleteUser = require('./user/deleteUser')
const listFavorites = require('./user/listFavorites')
const listFriends = require('./user/listFriends')
const findUsers = require('./user/findUsers')
const registerUser = require('./user/registerUser')
const retrieveUser = require('./user/retrieveUser')
const retrieveUserPublicInfo = require('./user/retrieveUserPublicInfo')
const toggleFavorite = require('./user/toggleFavorite')
const toggleFriend = require('./user/toggleFriend')
const updateUser = require('./user/updateUser')
const updateUserPassword = require('./user/updateUserPassword')
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
const completeSchedule = require('./completeSchedule')
const deleteSchedule = require('./schedules/deleteSchedule')

module.exports={
    authenticateUser,
    deleteUser,
    listFavorites,
    listFriends,
    findUsers,
    registerUser,
    retrieveUser,
    retrieveUserPublicInfo,
    toggleFavorite,
    toggleFriend,
    updateUser,
    updateUserPassword,
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
    deleteSchedule,
    completeSchedule
}