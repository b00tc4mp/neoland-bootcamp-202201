const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require('./deleteUser')
const addProduct = require('./addProduct')
const deleteProduct = require('./deleteProduct')
const retrieveProduct = require('./retrieveProduct')
const updateProduct = require('./updateProduct')
const registerAdmin = require('./registerAdmin')
const findProducts = require('./findProducts')


module.exports = {
    registerUser,
    authenticateUser,
    updateUser,
    retrieveUser,
    updateUserPassword,
    deleteUser,
    addProduct,
    deleteProduct,
    retrieveProduct,
    updateProduct,
    registerAdmin,
    findProducts
}