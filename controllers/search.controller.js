var Shoes = require('../models/product.model')
var Clothes = require('../models/clothes.model')

module.exports.find = async function(req,res){
    var page = parseInt(req.query.page) || 1;
    var shoe_rs=[];
    var cloth_rs=[];
    switch(req.query.main_type){
        case "shoe":
            shoe_rs = await Shoes.find({$and: [{main_type:{$regex:req.query.main_type,$options:"$i"}}]}).exec()
            break;
        case "clothing":
            cloth_rs = await Clothes.find({$and: [{main_type:{$regex:req.query.main_type,$options:"$i"}}]}).exec()
            break;
        default:
            shoe_rs = await Shoes.find({$or: [
                {productname:{$regex:req.query.q,$options:"$i"}},{main_type:{$regex:req.query.q,$options:"$i"}},{type:{$regex:req.query.q,$options:"$i"}},{brand:{$regex:req.query.q,$options:["$i","$x"]}}]}).exec()
            cloth_rs = await Clothes.find({$or: [{productname:{$regex:req.query.q,$options:"$i"}},{type:{$regex:req.query.q,$options:"$i",$options:"$x"}}]}).exec()
            break;
    }
    // shoe_rs = await Shoes.find({$or: [
    //     {productname:{$regex:req.query.q,$options:"$i"}},{main_type:{$regex:req.query.q,$options:"$i"}},{type:{$regex:req.query.q,$options:"$i"}},{brand:{$regex:req.query.q,$options:["$i","$x"]}}]}).exec()
    // cloth_rs = await Clothes.find({$or: [{productname:{$regex:req.query.q,$options:"$i"}},{type:{$regex:req.query.q,$options:"$i",$options:"$x"}}]}).exec()
    var total = shoe_rs.concat(cloth_rs);
    switch(req.query.order){
        case "date-desc":
            total.sort(function(a,b){
                if(a.updated > b.updated) return -1;
                else return 1;
            })
            break;
        case "date-asc":
            total.sort(function(a,b){
                if(a.updated < b.updated) return -1;
                else return 1;
            })
            break;
        case "price-asc":
            total.sort(function(a,b){
                if(a.price < b.price) return -1;
                else return 1;
            })
            break;
        case "price-desc":
            total.sort(function(a,b){
                if(a.price > b.price) return -1;
                else return 1;
            })
            break;
        default:
            break;
    }
    var result = total.slice((page-1)*15,page*15);
    var max_page = Math.ceil(total.length/12);
    res.render('search/searched',{find:req.query.q,products:result,url:req.originalUrl,max_page : max_page,current_page : page})
}