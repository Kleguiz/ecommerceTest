const express = require ('express')

const server = express()

server.get('/', (req, res) =>{
    console.log(req);
    res.send('<h1>API of e-commerce</h1>')
})

server.listen(3000,() =>{
    console.log("server running in http://localhost:3000");
})