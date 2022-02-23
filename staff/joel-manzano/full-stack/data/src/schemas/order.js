const { Schema } = require('mongoose')

const order = new Schema ({
    name: {
        type: String,
        required: true
    },

    serial: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
})

module.exports = order