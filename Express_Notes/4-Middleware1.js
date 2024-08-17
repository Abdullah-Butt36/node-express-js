const express = require('express');
const app = express();
const logger = require('./logger')
app.use(logger)
app.get('/' , (req , res) => {
    res.send("Home page")
})

app.get('/about'  , (req , res) => {
    res.send("about page")
})

app.get('/follow' , (req , res) => {
    res.send("follow page")
})

app.listen(5000, () => {
    console.log('port is running on server 5000')
});