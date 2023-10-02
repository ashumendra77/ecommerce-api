const express  = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel')
const port = 3000;

const app = express();
app.use(express.json());


app.listen(port, function(req,res){
    console.log("server is running on port", {port})
})

app.get('/', async function(req,res){

    try {
        const products = await Product.find();
        res.status(201).json({ data: products });
    } catch (err) {
        res.status(501).json(err);
    }
})


app.post('/product', async function(req,res){
    try {
        console.log(req.body);
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json(err);
    }
})

mongoose.connect('mongodb+srv://admin:admin@cluster0.uxvxgyl.mongodb.net/ecommerce-api?retryWrites=true&w=majority')
.then(()=> {
    console.log("connected to mongoo DB");
}).catch((error)=>{
    console.log("Connection fail",error);
})