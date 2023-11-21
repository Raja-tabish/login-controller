const express =require('express');
// const { product_by_id, all_product, create_product, update_product, delete_product } = require('../controller/products');
const router =  express.Router();

const{all_product,product_by_id,delete_product,update_product,create_product,signup}= require("../controller/products");

router.get('/product-by-id',product_by_id);

router.get('/all-product',all_product);

router.post('/create-product',create_product)

router.put('/update-product',update_product)

router.delete('/delete.product',delete_product)

router.post('/signup',signup)

module.exports=router;