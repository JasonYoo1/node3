const express = require('express');

const server = express();

server.get('/', (req,res)=>{
    res.status(200).json({api: 'up'})
});


server.get('/products', (req,res)=>{
    res.status(200).json({api: 'up'})
});

server.get('/clients', (req,res)=>{
    res.status(200).json({api: 'up'})
});

server.get('/suppliers', (req,res)=>{
    res.status(200).json({api: 'up'})
});

module.exports = server