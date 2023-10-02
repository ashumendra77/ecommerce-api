const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, 'Please enter product name']
        },
        quantity: {
            type: Number,
            require: true
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product',productSchema);

module.exports = Product;