const express = require("express")
const connectDB = require("./db");
const productRoutes = require("./routes/productRoutes")
require("dotenv").config();
const app = express()
connectDB();
const PORT =process.env.PORT;
app.use("/api/products",productRoutes)
app.listen(PORT ,() =>{
    console.log("Server running on port ${PORT}");
})