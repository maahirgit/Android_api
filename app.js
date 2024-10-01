const express = require('express');
const app = express();
const mongoose = require('mongoose')
app.use(express.json())

const userRouter = require('./src/routes/UserRoutes')
app.use("/users",userRouter)

const productRoutes = require('./src/routes/ProductRoutes')
app.use("/products",productRoutes)

const db = mongoose.connect("mongodb+srv://maahirmshah4252:PH8t0roYyXHsMoHa@cluster0.unu4s.mongodb.net/awsbasic")
db.then((data) => {
    console.log("DB Connected")
}).catch((err) =>{
    console.log(err)
})

const PORT = 3001;
app.listen(PORT,() =>{
    console.log('Server is connected to port '+PORT)
})