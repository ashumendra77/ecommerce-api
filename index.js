const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel')
const port = 3000;
const productRouter = require('./router/product')

const app = express();
app.use(express.json());


app.listen(port, function (req, res) {
    console.log("server is running on port", { port })
})

mongoose.connect('mongodb+srv://admin:admin@cluster0.uxvxgyl.mongodb.net/ecommerce-api?retryWrites=true&w=majority')
    .then(() => {
        console.log("connected to mongoo DB");
    }).catch((error) => {
        console.log("Connection fail", error);
    })



    app.use('/product',productRouter);

// app.get('/', async function (req, res) {

//     try {
//         const products = await Product.find();
//         res.status(201).json({ data: products });
//     } catch (err) {
//         res.status(501).json(err);
//     }
// })


// // app.post('/product', async function (req, res) {
// //     try {
// //         console.log(req.body);
// //         const product = await Product.create(req.body);
// //         res.status(201).json(product);
// //     } catch (err) {
// //         res.status(500).json({ err });
// //     }

// // })


// //for update 

// app.put('/product/:id', async function (req, res) {

//     try {
//         let product = await Product.findById(req.params.id);

//         product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!product) {
//             res.status(404).json('product not present')
//         }

//         res.status(200).json({ product })

//     } catch (error) {
//         res.status(404).json(error)

//     }




// })

//delete product

// app.delete('/product/:id', async function (req, res) {
//     const { id } = req.params;
//     // console.log(id);
//     try {

//         Product.findByIdAndDelete(id).then(() => {
//             res.send("Deleted Successfully!...")
//         })
//     } catch (error) {
//         res.status(400).json({ data: { message: "No product is found with the id" } });
//     }
// })



