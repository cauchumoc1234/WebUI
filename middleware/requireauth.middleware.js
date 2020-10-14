var User = require("../models/user.model")
module.exports.requireAuth = function(req,res,next){
    if(!req.signedCookies.id){
        res.redirect("/user/login")
    }
    else{
        next()
    }
}