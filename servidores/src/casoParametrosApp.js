const express = require('express');
const app = express();


app.get('/unparametro/:nombre',(req,res)=>{
    console.log(req.params.nombre)
    res.send(`Bienvenido', ${req.params.nombre}`)
})
app.get('/dosparametros/:nombre/:apellido',(req,res)=>{
    res.send(`el nombre completo es : ${req.params.nombre} ${req.params.apellido}`)
})

app.listen(8080,()=>console.log("listo para las peticiones ninjas"))