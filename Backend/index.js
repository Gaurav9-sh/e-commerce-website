// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"
// import fs from "fs/promises"

// const app = express();
// app.use(express.json())
// app.use(express.urlencoded());
// app.use(cors())


// const db_link = "mongodb+srv://gauravsh650:Zot9FiySG6TjoYLx@clusteruser.q5ygulx.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(db_link)
//     .then(() => {
//         console.log("Db is connected")
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const UserModel = new mongoose.model("UserModel", userSchema)

// const partSchema = new mongoose.Schema({
//     image:{
//         type: String,
//         required: true
//     }
// })

// const productSchema = new mongoose.Schema({
//     id:{
//         type:Number,
//         required:true
//     },
//     title: {
//         type: String,
//         required: true
//       },
//       price: {
//         type: Number,
//         required: true
//       },
//       description: {
//         type: String,
//         required: true
//       },
//       category: {
//         type: String,
//         required: true
//       },
//       image: {
//         type: String,
//         required: true
//       },
//       part: {
//         type: [partSchema],
//         default: []
//       }
//     });
//     const Product = mongoose.model('Product', productSchema);
//     async function insertDataFromFile() {
//         try {
//           // Read data from JSON file
//           const jsonData = await fs.readFile("C:/Users/gaura/OneDrive/Desktop/e-commerce-website2/e-commerce-website/e-commerce-website2/src/components/ProductsData.json", "utf-8");
//           const data = JSON.parse(jsonData);
      
//           // Insert data into MongoDB
//           await Product.insertMany(data);
      
//           console.log("Data inserted successfully");
//         } catch (err) {
//           console.error("Error inserting data:", err);
//         }
//       }
//     //   insertDataFromFile();
     
//     // function to delete products
//       async function deleteall(){
//         try{
//           const result = await Product.deleteMany({});
//           console.log(`${result.deletedCount} product(s) deleted.`);
//         }
//         catch(err){
//             console.log(err);
//         }
//       }
//     //  deleteall();
  
//     // function to delete user
//     async function deleteUser(){
//         try{
//             const result = await UserModel.deleteMany();
//             console.log(`${result.deletedCount} user deleted`)
//         }
//         catch(err){
//            console.log(err);
//         }
//     }
//     //  deleteUser();
// // Routes
// app.post("/login", async (req, res) => {
//     const{ name, password} = req.body
//     try{
//         const check = await UserModel.findOne({ name : name})

//     if(check){
//         if ( password === check.password){
//             res.send({message:"Login success",user: check})
//         }

//         else{
//             res.send({message:"Incorrect Password"})
//         }
//     }
//     else{
//         res.send({message:"Not register"})
//     }
//     }

//     catch(err){
//         console.log(err)
//     }    
// })

// app.post("/register", async (req, res) => {
//     const { name, email, password } = req.body
//     const data = {
//         name: name,
//         email: email,
//         password: password
//     }
//     try {
//         const check = await UserModel.findOne({ email: email })

//         if (check) {
//             res.send({ message: "User already registered" })
//         }

//         else {
//             const newUser = new UserModel(data);
//             await newUser.save();
//             res.send({ message: "User registered successfully" });
//         }
//     }
//     catch (err) {
//         console.log(err);
//     }


// })

// app.get('/api/products/:category', async (req,res)=>{
//     try{
//         const {category} = req.params;
//         const products = await Product.find({category:category});
//         res.json(products);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// })

// app.get('/api/products', async (req,res) =>{
//     try{
//         const result = await Product.find({});
//         res.json(result);

//     }
//     catch(err){
//         console.log(err);
//     }
// })

// app.listen(3000, () => {
//     console.log("Backend has started")
// })

// // Zot9FiySG6TjoYLx