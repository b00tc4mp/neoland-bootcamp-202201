const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const schedule = require('./schedule')

const user = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },
    
    favs: [{
        type: ObjectId,
        ref: 'Action'
    }],

    notifications: {
        type: Boolean,
        required:true,
        default: true
    },

    friends: [{
        type: ObjectId,
        ref: 'User'
    }]  
})

module.exports = user