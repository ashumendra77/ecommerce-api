const Product = require("../models/productModel");

//To get all products
const fetchProduct = async (req, res) => {

    try {
        const products = await Product.find();
        res.status(201).json({ data: products });
    } catch (err) {
        res.status(501).json(err);
    }
}

// To create product
const createproduct = async (req, res) => {

    try {
        // console.log(req.body);
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ err });
    }
}

//To update a single product

const updateProduct = async (req, res) => {

    try {
        let product = await Product.findById(req.params.id);

        product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            res.status(404).json('product not present')
        }

        res.status(200).json({ product })

    } catch (error) {
        res.status(404).json(error)

    }
}

//To delete a single product

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    try {

        Product.findByIdAndDelete(id).then(() => {
            res.send("Deleted Successfully!...")
        })
    } catch (error) {
        res.status(400).json({ data: { message: "No product is found with the id" } });
    }
}

module.exports = {fetchProduct,createproduct,deleteProduct,updateProduct}