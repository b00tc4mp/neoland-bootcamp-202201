const { model } = require('mongoose')
const { order } = require('../Schemas')

const Order = model('Order', order)

module.exports = Order