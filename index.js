const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel')
const port = 3000;

const app = express();
app.use(express.json());


app.listen(port, function (req, res) {
    console.log("server is running on port", { port })
})

app.get('/', async function (req, res) {

    try {
        const products = await Product.find();
        res.status(201).json({ data: products });
    } catch (err) {
        res.status(501).json(err);
    }
})


app.post('/product', async function (req, res) {
    try {
        console.log(req.body);
        const Product = await Product.create(req.body);
        res.status(201).json(Product);
    } catch (err) {
        res.status(500).json(err);
    }
})


//for update 

app.put('/product/:id', async function (req, res) {

    try {
        let product = await Product.findById(req.params.id);
        // const { id } = req.params;

        product = await Product.findByIdAndUpdate( req.params.id,req.body,{new: true });
        if (!product) {
            res.status(404).json('product not present')
        }

        // const product = await Product.findById(id);
        res.status(200).json({ product })

    } catch (error) {
        res.status(404).json(error )

    }




})

//delete product

// app.delete('/product/:id', async function (req, res) {
//     const {id} = req.params.id;
//     try {
//         await Product.remove({ "_id": req.params.id });
//         res.status(200).json({ data: { message: "product deleted" } });
//     } catch (error) {
//         res.status(400).json({ data: { message: "No product is found with the id" } });
//     }
// })



mongoose.connect('mongodb+srv://admin:admin@cluster0.uxvxgyl.mongodb.net/ecommerce-api?retryWrites=true&w=majority')
    .then(() => {
        console.log("connected to mongoo DB");
    }).catch((error) => {
        console.log("Connection fail", error);
    })