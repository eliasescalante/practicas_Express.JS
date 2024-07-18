const express = require('express');
const app = express()
const usuarios = [
    {id:"1",nombre:"Mauricio",apellido:"Espinosa",edad:25},
    {id:"2",nombre:"Juan",apellido:"Perez",edad:30},
    {id:"3",nombre:"Maria",apellido:"Gomez",edad:20},
]

app.get('/',(req,res)=>{
    res.send({usuarios})
})
app.get('/:idUsuario',(req,res)=>{
    let idUsuario = req.params.idUsuario;
    let usuario = usuarios.find(u=>u.id===idUsuario);
    if(!usuario) return res.send({error:"Usuario no encontrado"})
    res.send({usuario})
})

app.listen(8080,()=>console.log("listo para testear"))