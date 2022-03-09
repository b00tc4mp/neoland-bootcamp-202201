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
    retrieveProduct
}