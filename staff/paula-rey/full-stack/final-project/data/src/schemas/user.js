const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema


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

    favorite: [{
        type: ObjectId,
        ref: 'Location'
    }],

    follow: [{
        type: ObjectId,
        ref: 'User'
    }]

})

module.exports = user

