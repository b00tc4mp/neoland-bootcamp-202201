const { Schema } = require('mongoose')

const product = new Schema ({
    
    name: {
        type: String,
        required: true
    },

    size: {
        type: String,
        required: true
    },

    color: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },


})

module.exports = product