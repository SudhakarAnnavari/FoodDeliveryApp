const express = require('express');
const { register, login } = require('../controller/UserController');
const { DisplayData } = require('../controller/DisplayData');
const {OrderData, myOrderData} = require('../controller/OrderController');
const Route = express.Router()


Route.post('/signup',register)
Route.post('/login',login)
Route.get('/fooditems',DisplayData)
Route.post('/orderdata',OrderData)
Route.post('/myorderdata',myOrderData)

module.exports = Route