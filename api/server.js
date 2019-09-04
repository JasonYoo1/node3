const express = require('express');

const server = express();

server.get('/', (req,res)=>{
    res.status(200).json({api: 'up'})
});

//global middleware
server.use(express.json());

server.use('/products', productsRouter);

server.get('/', (req,res)=>{
    res.status(200).json({api:'up'});
});

server.get('/clients', (req,res)=.{
    
})

module.exports = server