const { Schema } = require('mongoose')

const graffiti = new Schema({
    
    artist_name: {
        type: String,
        required: false
    },

    city: {
        type: String,
        required: true
    },

    street: {
        type: String,
        required: true
    },

    number: {
        type: Number,
        required: false
    },

    postal_code: {
        type: Number,
        required: false
    },

    location: {
        type: String,
        required: true
    },

    style: {
        type: String,
        required: true,
        enum: ['unknown', 'tags', '3d', 'bombing', 'bubbles', 'blockbuster', 'realism', 'icons', 'trash', 'abstract'],
        default: 'unknown'
    },

    description: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 200
    },

    image: {
        type: File,
        required: true
    },

    status: {
        type: String,
        required: true,
        enum: ['exists', 'trampled', 'cleaned up'],
        default: 'exists'
    },

    spray_brand: {
        type: String,
        required: false
    },

    color: {
        type: String,
        required: false
    }


})

module.exports = graffiti