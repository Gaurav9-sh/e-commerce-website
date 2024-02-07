const mongoose = require("mongoose")

const DB = process.env.DATABASE

mongoose.connect(DB)
.then(() => {
   console.log("Db is connected")
})
.catch((err) => {
    console.log(err);
})
