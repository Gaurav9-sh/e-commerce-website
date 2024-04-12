const express = require('express');
const Razorpay = require("razorpay");
const router = express.Router();
var crypto = require('crypto')
// const instance = require('../App');


var instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET_KEY,
  })

router.post("/api/checkout", async (req,res) => {
   const options = {
    amount: Number(req.body.amount*100),
    currency: 'INR',
    // receipt: 'order_rcptid_11'
   };

   const order = await instance.orders.create(options)
   console.log(order);
   res.status(200).json({
    success: true,
    order,
   })
})
router.post("/api/paymentverification", async (req,res) => {
    console.log("this is req body",req.body)
    const {razorpay_order_id, razorpay_payment_id,razorpay_signature} = req.body

    const body = razorpay_order_id+ "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET_KEY)
                              .update(body.toString())
                              .digest('hex')
                              console.log("Sig received", razorpay_signature);
                              console.log("Sig generated", expectedSignature);
    
    res.status(200).json({
        success:true,
    })                          

})

module.exports = router