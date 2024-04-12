const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors())
dotenv.config({path: './Config.env'})

const PORT = process.env.PORT
require('./Database/connection')
app.use(require('./Routers/auth'))
app.use(require('./Routers/product'))
app.use(require('./Routers/paymentroute'))

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.get('/',(req,res) =>{
    res.send("Hello my name is khan")
})

app.listen(PORT,() =>{
    console.log("Backend has started")
})

app.get("/api/getKey", (req,res) => 
  res.status(200).json({key: process.env.RAZORPAY_API_KEY})
)
