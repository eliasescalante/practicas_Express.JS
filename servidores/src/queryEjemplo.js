const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))

app.get('/ejemploQ',(req,res)=>{
    let consultas = req.query;
    let {nombre,apellido,edad} = req.query;
    res.send(consultas)
})

app.listen(8080,()=>console.log("listo para probar las queries"))

