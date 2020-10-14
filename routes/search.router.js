const express = require('express')
const search_router = express.Router()
const search_controller = require('../controllers/search.controller')
search_router.get('/',search_controller.find)
module.exports = search_router;