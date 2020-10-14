var Shoe = require('../models/product.model')
var Clothing = require('../models/clothes.model')
module.exports.findShoe = async function(id){
    return await Shoe.findOne({productname:id});
}
module.exports.show = function(req, res) {
    res.render('product')
}
module.exports.showShoe = function(req,res){
    Shoe.findById(req.params.id).exec().then(docs=>{
        res.render('product',{product:docs.toJSON()})
    })
}
module.exports.showClothing = function(req,res){
    Clothing.findById(req.params.id).exec().then(docs=>{
        res.render('product',{product:docs.toJSON()})
    })
}
module.exports.buyNow = function(req,res){
    res.send(req.body)
}