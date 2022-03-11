const { Schema, Types: { ObjectId } } = require('mongoose')


const graffiti = new Schema({

    user: {
        type: ObjectId,
        required: true
    },

    artist: {
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
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true,
        enum: ['exists', 'trampled', 'cleaned up'],
        default: 'exists'
    },

    spray: {
        type: String,
        required: false
    },

    color: {
        type: String,
        required: false
    }


})

module.exports = graffiti