const express = require('express');
const app = express();

app.get('/' , (req , res) => {
    console.log("Function Called")
    res.send("Home page")
})

app.get('/about' , (req , res) => {
    res.send("About page")
})

app.get('*' , (req , res) => {
    res.status(404).send("Page not found");
})

app.listen(5000 , () => {
    console.log("Server is running on port : 5000")
})