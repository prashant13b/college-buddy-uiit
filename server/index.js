const express = require('express');
const bodyParser = require('body-parser');
const keys = require('./config/config')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.listen(keys.PORT,()=>{
    console.log(`App working at port : ${keys.PORT}`); 
});