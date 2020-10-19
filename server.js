require('dotenv').config();

var express = require('express');

var app = express();
var port = 3000; //signed cookies

var express = require('express');

var cookieParser = require('cookie-parser');

app.use(cookieParser(process.env.APP_SECRET)); //Link to static file

app.use(express["static"]("public"));
var product_controller = require("./controllers/product.controller")
var bodyParser = require('body-parser');
var Product = require('./models/product.model')
var Clothing = require('./models/clothes.model')
app.use(bodyParser.json()); // for parsing application/json

app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

var db = require('./db');

var product_router = require('./routes/product.router');

var user_router = require('./routes/user.router');
var admin_router = require('./routes/admin.router');
var search_router = require('./routes/search.router')
app.listen(port); //Set pug view engine

app.set('view engine', 'pug');
app.set('views', './views');
app.use('/product', product_router);
app.use('/admin', admin_router)
app.use('/search',search_router)
app.get('/',async function(req, res) {
    
    var shoe = await Product.find().sort('updated:desc').limit(10).exec()
    var clothes = await Clothing.find().limit(10).exec()
    var product = shoe.concat(clothes);
    var x = product.sort((a,b)=>{
        if(a.updated > b.updated){
            return -1;
        }
        else return 1;
    })
    res.render('home',{shoes:shoe,clothes:clothes,product:x})    
});
app.use('/user', user_router);