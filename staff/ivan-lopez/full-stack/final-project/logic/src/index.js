const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const updateUser = require('./updateUser')
const retrieveUser = require('./retrieveUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require ('./deleteUser')
const addProduct = require ('./addProduct')
const listProducts = require ('./listProducts')
const deleteProduct = require ('./deleteProduct')
const retrieveProduct = require ('./retrieveProduct')
const updateProduct = require ('./updateProduct')
const registerAdmin = require('./registerAdmin')

module.exports = {
    registerUser,
    authenticateUser,
    updateUser,
    retrieveUser,
    updateUserPassword,
    deleteUser,
    addProduct,
    listProducts,
    deleteProduct,
    retrieveProduct,
    updateProduct,
    registerAdmin
}