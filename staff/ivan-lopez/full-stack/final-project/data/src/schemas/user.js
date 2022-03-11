const { Schema } = require('mongoose')
const order = require('./order')
const cart = require('./cart')

const user = new Schema({

    name: {
        type: String,
        required: true,
        minlength: 2
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    role: {
        type: String,
        required: true,
        enum : ['user','admin'],
        default: 'user'
    },

    cart,
    orders: [order]
    

})

module.exports = user