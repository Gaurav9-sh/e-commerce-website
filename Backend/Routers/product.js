const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");


require('../Database/connection');

const Products = require('../models/productSchema')


router.get('/api/products/:category', async (req,res) =>{
    try{
        const {category} = req.params;
        const products = await Products.find({category:category});
        res.json(products);
    }
    catch(err){
        console.log(err);
    }
})
router.get('/api/products', async (req,res) =>{
     try{
        const result = await Products.find({});
        res.json(result);
     }
     catch(err){
        console.log(err);
     }
})

module.exports = router;