const express = require('express');
const app = express();
const mongoose = require('mongoose')
app.use(express.json())

const userRouter = require('./src/routes/UserRoutes')
app.use("/users",userRouter)

const productRoutes = require('./src/routes/ProductRoutes')
app.use("/products",productRoutes)

const db = mongoose.connect("mongodb://127.0.0.1:27017/AndroidApi")
db.then((data) => {
    console.log("DB COnnected")
}).catch((err) =>{
    console.log(err)
})

const PORT = 3001;
app.listen(PORT,() =>{
    console.log('Server is connected to port '+PORT)
})