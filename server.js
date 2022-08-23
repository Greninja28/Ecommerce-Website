const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 80;
const path = require('path');

app.use(express.static('./'));
app.use(express.urlencoded());

app.get('/', (req,res)=>{
    res.render('index.html');
})

app.listen(port, hostname,()=>{
    console.log(`The server started at the url: http://${hostname}:${port}.`);
})
