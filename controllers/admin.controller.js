var Product = require('../models/product.model');
var Clothing = require("../models/clothes.model")
module.exports.show = function(req, res) {
    res.render('admin/admin')
}
module.exports.addShoe = function(req, res) {
    req.body.price = parseInt(req.body.price)
    Product.create({

        productname: req.body.name,
        updated: Date.now(),
        avatar: req.body.avtlink,
        price: req.body.price,
        inStock: {
            "35,5": req.body.size[0],
            "36": req.body.size[1],
            "36,5": req.body.size[2],
            "37": req.body.size[3],
            "37,5": req.body.size[4],
            "38": req.body.size[5],
            "38,5": req.body.size[6],
            "39": req.body.size[7],
            "39,5": req.body.size[8],
            "40": req.body.size[9],
            "40,5": req.body.size[10],
            "41": req.body.size[11],
            "41,5": req.body.size[12],
            "42": req.body.size[13],
            "42,5": req.body.size[14],
            "43": req.body.size[15],
            "43,5": req.body.size[16],
            "44": req.body.size[17],
            "44,5": req.body.size[18],
            "45": req.body.size[19]
        },
        type: req.body.type,
        brand: req.body.brand
    })
    res.redirect('/admin')
}
module.exports.addCloth = function(req,res){
    req.body.price = parseInt(req.body.price)
    Clothing.create({
        productname: req.body.name,
        updated: Date.now(),
        avatar: req.body.avtlink,
        price: req.body.price,
        inStock: {
            "S": req.body.size[0],
            "M": req.body.size[1],
            "L": req.body.size[2],
            "XL": req.body.size[3],
            "2XL": req.body.size[4]
        },
        type: req.body.type,
        brand: req.body.brand
    })
    res.redirect('/admin')

}