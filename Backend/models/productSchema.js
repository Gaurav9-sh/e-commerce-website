const mongoose = require('mongoose')


const partSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    part: {
        type: [partSchema],
        default: []
    }
});

const ProductModel = mongoose.model('ProductModel', productSchema);

module.exports = ProductModel