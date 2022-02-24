const { Schema } = required('mongoose')
const { Types: { ObjectId } } = Schema

const stock = new Schema({
    product: [{
        type: ObjectId,
        required: true
    }],

    color: {
        type: Color,
        required: true

    },

    size: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
})

module.exports = stock
