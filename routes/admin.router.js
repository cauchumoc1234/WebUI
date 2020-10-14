const express = require('express')
const admin_router = express.Router()
const admin_controller = require('../controllers/admin.controller')
admin_router.get('/', admin_controller.show)
admin_router.post('/add_product/shoes', admin_controller.addShoe)
admin_router.post('/add_product/clothing', admin_controller.addCloth)
module.exports = admin_router;