const router = require('express').Router()
const productController = require('../controller/ProductController')

router.post("/addproduct",productController.addProduct)
