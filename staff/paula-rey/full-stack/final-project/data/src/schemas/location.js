const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const comment = require('./comment')


const location = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },

    title: {
        type: String,
        required: true,
        maxLength: 50
    },

    image: {
        type: String,
    },

    description: {
        type: String,
        required: true,
        maxLength: 300
    },

    adress: {
        type: String,
        required: true,
    },

    coord: {
        type: [Number, Number],
        unique: true
    },

    comments: [comment]
    
})

module.exports = location

