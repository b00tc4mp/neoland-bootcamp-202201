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


module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    deleteUser,
    addProduct,
    listProducts,
    deleteProduct,
    retrieveProduct
}