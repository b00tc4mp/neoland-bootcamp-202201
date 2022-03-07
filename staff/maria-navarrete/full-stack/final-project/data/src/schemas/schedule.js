const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const schedule = new Schema({
    action: {
        type: ObjectId,
        ref: 'Action',
        required: true
    },  

    date: {
        type: Date,
        required: true,
    },

    repeat: {
        type: Number,
        required: true,
    },

    completed: [{
        type: Number,
        required: true,
    }],   
})

module.exports = schedule