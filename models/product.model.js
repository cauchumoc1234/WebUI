var mongoose = require('mongoose')
var productSchema = new mongoose.Schema({
    productname: { type: String, required: true },
    updated: { type: Date, default: Date.now },
    avatar: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: {
        "35,5": Number,
        "36": Number,
        "36,5": Number,
        "37": Number,
        "37,5": Number,
        "38": Number,
        "38,5": Number,
        "39": Number,
        "39,5": Number,
        "40": Number,
        "40,5": Number,
        "41": Number,
        "41,5": Number,
        "42": Number,
        "42,5": Number,
        "43": Number,
        "43,5": Number,
        "44": Number
    },
    main_type: String,
    type: [],
    brand: [String]
})
module.exports = mongoose.model('Product', productSchema)