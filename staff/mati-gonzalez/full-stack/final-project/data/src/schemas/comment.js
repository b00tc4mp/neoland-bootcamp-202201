const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const comment = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    
    answer: {
        type: ObjectId,
        ref: 'Answer',
        required: true,
        unique: true
    },

    text: {
        type: String,
    },

    date: {
        type: Date
    },

    likes: {
        type: Number
    }
})

module.exports = comment