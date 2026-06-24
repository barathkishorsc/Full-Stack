const Product = require("../models/product");

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Server Error" });
    }
};