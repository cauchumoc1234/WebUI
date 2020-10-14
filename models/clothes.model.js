var mongoose = require('mongoose')
var clothSchema = new mongoose.Schema({
    productname: { type: String, required: true },
    updated: { type: Date, default: Date.now },
    avatar: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: {
        "S": Number,
        "M": Number,
        "L": Number,
        "XL": Number,
        "2XL": Number,
    },
    main_type: String,
    type: [],
    brand: [String]
})
module.exports = mongoose.model("Cloth",clothSchema,"clothes")