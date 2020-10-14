const { JSONCookies } = require('cookie-parser')
var User = require('../models/user.model')

module.exports.show = function(req, res) {
    res.send("user")
}
module.exports.create = function(req, res) {
    res.render('user/user_create')
}
module.exports.postCreate = function(req, res) {
    //Cần thêm kiểm tra user đã tồn tại chưa
    User.create({
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.fullname,
        address: req.body.addess,
        phone: req.body.phone,
    }, function(err) {
        if (err) return handleError(err);
        // lưu!
    })
    res.redirect('/')
}
module.exports.login = function(req, res) {
    res.render('user/user_login')
}
module.exports.logout = function(req, res) {
    document.cookie = "_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}
module.exports.postLogin = async function(req, res) {
    var user = await User.find({ 'username': req.body.username, 'password': req.body.password }).exec();
        if(user.length >0){
            res.cookie('id',user[0]._id,{signed:true})
            res.redirect('/')
        }
        else{
            res.render('user/user_login',{error: "Login info was wrong! Please submit the right one."})
        }
}
module.exports.showProfile = async function(req, res) {
    var id = req.signedCookies.id
    var user = await User.find({"_id": id},'username fullname').exec();
    res.render('user/profile',{user: user})
}
module.exports.logout = function(req, res) {
    res.clearCookie('id');
    res.redirect('/')
}
//Làm page profile của user