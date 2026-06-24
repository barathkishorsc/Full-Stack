const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const connectDB = async () => {
    try {
            await mongoose.connect(process.env.MONGOURI)
            console.log("Database connected")
    }catch (error) {
        console.error("MongoDB connection error",error);
    }
}
module.exports = connectDB;