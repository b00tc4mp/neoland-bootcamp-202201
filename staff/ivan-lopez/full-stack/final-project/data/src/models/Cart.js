const { model } = require('mongoose')
const { cart } = require('../schemas')

const Cart = model('Cart', cart)

module.exports = Cart