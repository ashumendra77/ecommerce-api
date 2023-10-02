const express  = require('express');
const mongoose = require('mongoose');
const port = 3000;

const app = express();



app.listen(port, function(req,res){
    console.log("server is running on port", {port})
})

app.get('/product', function(req,res){
    return res.send("new project started!! Grate")
})

mongoose.connect('mongodb+srv://admin:admin@cluster0.uxvxgyl.mongodb.net/ecommerce-api?retryWrites=true&w=majority')
.then(()=> {
    console.log("connected to mongoo DB");
}).catch((error)=>{
    console.log("Connection fail",error);
})