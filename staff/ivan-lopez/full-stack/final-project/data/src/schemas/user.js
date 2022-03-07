const { Schema } = require('mongoose')

const user = new Schema({
    name: {
        id: ObjectId,
        type: String,
        required: true
    },

    surname: {
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
        enum : ['default','admin'],
        default: 'default'
    }

})

module.exports = user