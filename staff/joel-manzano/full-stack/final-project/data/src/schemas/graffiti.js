const { Schema, Types: { ObjectId } } = require('mongoose')


const graffiti = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    artist: {
        type: String,
        required: false
    },

    
    description: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 200
    },

    image: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    address: {
        type: String
    },

    postalCode: {
        type: Number
    },

    location: {
        type: String
    },

    style: {
        type: String,
        required: true,
        enum: ['unknown', 'tags', '3d', 'bombing', 'bubbles', 'blockbuster', 'realism', 'icons', 'trash', 'abstract'],
        default: 'unknown'
    },

    status: {
        type: String,
        required: true,
        enum: ['exists', 'trampled', 'cleaned up'],
        default: 'exists'
    },

    spray: {
        type: String
    },

    color: {
        type: String
    }

})

module.exports = graffiti