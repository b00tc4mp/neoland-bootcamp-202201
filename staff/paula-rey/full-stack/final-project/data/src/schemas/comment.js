const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const comments = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    text: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    location: {
        type: ObjectId,
        ref: 'Location',
        required: true
    }

})

module.exports = comments