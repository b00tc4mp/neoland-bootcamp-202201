const { Schema } = require('mongoose')
const location = require('./location')

const user = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 2 
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minLength: 8
    },

    locations : [location]

})

module.exports = user