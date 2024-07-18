const http = require('http');

const server = http.createServer((request,response)=>{
    response.end("Holis mundo, desde el backend!!")
})

server.listen(8080,()=>{
    console.log("Servidor corriendo en el puerto 8080")
})