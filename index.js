const express = require('express');
const app = express();
const urlRouter = require('./routes/url');  
const {connectToMongoDB} = require('./connect');    

const port = 8001;
connectToMongoDB(' mongodb://127.0.0.1:27017/short-url').then(() => {
console.log('mongodb connected');
});
app.use('/', urlRouter);
app.listen(port, () => {   
    console.log(`Server is started at port: ${port}`);
});