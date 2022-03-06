const { Schema } = require('mongoose')

const user = new Schema({
    is_artist: {
        type: Boolean,
        required: true
    },
    
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
    }
})

module.exports = user