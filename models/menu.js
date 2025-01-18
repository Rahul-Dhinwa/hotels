const mongoose = require('mongoose');

// Define person schema

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true,
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    num_sales: {
        type: Number,
        default: 0,
    }
});

//Create menu module

const menu = mongoose.model('menu', menuSchema);
module.exports = menu;

