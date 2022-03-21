const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema

const user = new Schema({
    
    
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
    },

    favorites:[{
        type: ObjectId,
        ref: 'Graffiti'
    }]
})

module.exports = user