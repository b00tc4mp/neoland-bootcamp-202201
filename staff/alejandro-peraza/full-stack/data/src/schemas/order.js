const { Schema } = require('mongoose')


const order = new Schema({
    stock: {
        type: String,
        required: true
    },

    serian: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
})

module.exports = order