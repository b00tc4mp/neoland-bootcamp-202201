const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema

const tournament = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
   
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    }
})

module.exports = tournament