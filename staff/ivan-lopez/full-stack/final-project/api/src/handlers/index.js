const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require('./deleteUser')
const addProduct = require('./addProduct')
const listProducts = require('./listProducts')
const deleteProduct = require('./deleteProduct')
const retrieveProduct = require('./retrieveProduct')
const updateProduct = require('./updateProduct')

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
    updateProduct
}