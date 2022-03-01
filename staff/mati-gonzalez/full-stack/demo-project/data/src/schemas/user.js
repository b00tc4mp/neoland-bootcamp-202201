const { schema } = require('mongoose')
const creditCard = require('./creditCard')

const user = new schema({
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

    creditCards: [creditCard]
})

module.exports = user