    const express = require('express');
    const app = express();
    const port = 5000;
    const {products} = require('./data')
    
    app.get('/' , (req , res) => {
     res.send("<h2>Home page</h1>")
    })
    
    app.get('/api/products', (req , res) => {
        const newProduct = products.map((product) => {
            const {name , id , desc} = product;
            return {id , name , desc}
        })
        res.json(newProduct)
    })
    
    // using Params
    app.get('/api/products/:productID', (req , res) => {
        const {productID} = req.params
        const singleProduct = products.find((product) => product.id === Number(productID))
        if(!singleProduct){
            return res.status(404).send("File does not exist")
        }
    res.json(singleProduct)
    })
    
    
    
app.get('*' , (req , res) => {
    res.status(404).send("Page not found");
})

app.listen(port , () => {
    console.log("port is listening on 5000...")
})