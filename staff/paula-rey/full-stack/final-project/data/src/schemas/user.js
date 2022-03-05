const { Schema } = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 20 
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

})

module.exports = user