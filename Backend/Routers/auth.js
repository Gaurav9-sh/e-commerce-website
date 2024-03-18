const jwt = require('jsonwebtoken');
const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')



require('../Database/connection')
const User = require("../models/userSchema");

router.get('/', (req, res) => {
    res.send("Hello i am from router")
})


router.post('/register', async (req, res) => {
    const { name, email, password, confirmpassword } = req.body;

    if (!name || !email || !password || !confirmpassword) {

        return res.status(422).json({ error: "Please enter all the crendentials" })

    }

    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.json({ message: "Email already exists" })
        }

        const user = new User({ name, email, password })

        const response = await user.save();

        if (response) {
            res.status(201).json({ message: "User registered successfully" })
        }
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/login', async (req, res) => {
    const { name, password } = req.body;

    try {
        let token;
        const check = await User.findOne({ name: name })

        if (check) {
            const isMatch = await bcrypt.compare(password, check.password)

            token = await check.generateAuthToken();

            if (isMatch) {

                res.status(200).json({ message: "Login successfully", token:token })

            }
            else {
                res.status(401).json({ error: "Invalid details" })
            }
        }
        else{
            res.status(401).json({error: " user not found"})
        }

    }
    catch (err) {
        console.log(err);
    }
})

router.post('/Cart', async ( req, res) => {
    try{
        const { userId, image,id, title, price} = req.body;

        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({erro: 'user not found'});
        }
        
        user.cart.push({
            id,
            image,
            title,
            price,
        })

        await user.save();
        res.status(200).json({message:"Item added to cart successfully"})
    }
    catch(err){
        console.log(err);
    }
})

router.delete('/api/cartitems/:userId/:itemId', async (req, res) => {
   
    try {
        const userId = req.params.userId;
        const itemId = req.params.itemId;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const itemToRemove = user.cart.find((item) => item.id === itemId);

        if (!itemToRemove) {
            return res.status(404).json({ error: 'Item not found in user\'s cart' });
        }

        // Remove the item from the cart
        user.cart = user.cart.filter((item) => item.id !== itemId);

        await user.save();
        res.status(200).json({ message: 'Item removed from cart successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/api/getCartItems/:userId', async (req,res) => {
    const userId = req.params.userId;
    try{
        const user = await User.findById(userId)

        if( !user){
            return res.status(404).json({message:"user not found"})
        }

        const cartitems = user.cart

        res.status(200).json({cartitems})
    }catch(err){
        console.log("error:",err);
    }
})

router.patch('/api/setQuantity/:userId/:itemId', async (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    const { quantity } = req.body;
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      
      const itemIndex = user.cart.findIndex(item => item.id === itemId);
  
      if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found in the user\'s cart' });
      }
  
     
      user.cart[itemIndex].quantity = quantity;
  
     
      const updatedUser = await user.save();
  
      res.status(200).json({ message: 'Quantity updated successfully', user: updatedUser });
    } catch (error) {
      console.error('Error setting quantity:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.get('/api/applycoupon', (req,res) => {
      const {couponCode} = req.query;

      if( couponCode === 'GAURAV20'){
        res.status(200).json({discount: 200});
      }
      else{
        res.status(400).json({error: 'Invalid coupon code'})
      }
  })
  
  router.post('/api/wishlist', async (req,res) => {

    const {userId, id, image, title, price} = req.body
    
    try{
        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({message:"User not found"})
        }

        user.wishlist.push({
            id,
            image,
            title,
            price
        })

        await user.save();
        res.status(200).json({message:"Item added to cart successfully"})
    }

    catch(err){
        console.log(err);
    }
  })

  router.delete('/api/wishlist/:userId/:productId', async (req, res) => {
    const { userId, productId } = req.params;
  
    try {
      // Find the user by userId
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Remove the product from the wishlist
      user.wishlist = user.wishlist.filter((item) => item.id !== productId);
  
      // Save the updated user
      await user.save();
  
      res.status(200).json({ message: 'Product removed from wishlist successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  router.get('/api/checkwishlist/:userId/:productId', async (req, res) => {
    const { userId, productId } = req.params;
  
    try {
      // Find the user by userId
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ isInWishlist: false, message: 'User not found' });
      }
  
      // Check if the product is in the wishlist
      const isInWishlist = user.wishlist.some((item) => item.id === productId);
  
      res.status(200).json({ isInWishlist, message: 'Wishlist checked successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ isInWishlist: false, message: 'Internal Server Error' });
    }
  });
   
  router.get('/api/wishlist/:userId/', async ( req,res) =>{
    const userId = req.params.userId
   
    try{
        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({message:"user not found"});
        }
        
        const wishlistItems = user.wishlist
        res.status(200).json({wishlistItems})
    }
    catch(err){
        console.log(err);
    }

  })

  router.get("/api/userDetails/:userId", async (req,res) => {
    const userId = req.params.userId;
    try{
        const user = await User.findById(userId);

        if(!user){
            res.status(404).json({message:"User not found"})
        }

        res.status(200).json({name:user.name , email:user.email});
    }
    catch(err){
        console.log(err);
    }
  })

module.exports = router;