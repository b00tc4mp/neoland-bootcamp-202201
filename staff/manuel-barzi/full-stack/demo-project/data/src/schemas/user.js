const { Schema } = require('mongoose')
const creditCard = require('./creditCard')

const user = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    },

    creditCards: [creditCard]
})

module.exports = user