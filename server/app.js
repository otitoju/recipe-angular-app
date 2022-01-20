const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes/index.js')
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)
//PORT
const port = 8000;
app.listen(port,() =>{
    console.log(`Recipe app is listening to ${port}`)
})
app.get('*', (req,res) => {
    res.json(`404 ERROR, PAGE NOT FOUND`)
})
//DATABASE CONNECTION
mongoose.connect('mongodb://localhost:27017/food_recipe');