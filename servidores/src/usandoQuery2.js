const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))

const usuarios = [
    {id:"1",nombre:"Dalia",apellido:"Gomez",genero:"F"},
    {id:"2",nombre:"Juan",apellido:"Perez",genero:"M"},
    {id:"3",nombre:"Maria",apellido:"Lopez",genero:"F"},
    {id:"4",nombre:"Pedro",apellido:"Gonzalez",genero:"M"},
    {id:"5",nombre:"Ana",apellido:"Gomez",genero:"F"},
    {id:"6",nombre:"Juan",apellido:"Perez",genero:"M"},
]

app.get('/',(req,res)=>{
    let genero = req.query.genero;
    if(!genero ||(genero!=="M"&&genero!=="F")) return res.send({usuarios})
    let usuariosFiltrados = usuarios.filter(usuario=>usuario.genero===genero);
    res.send({usuarios:usuariosFiltrados})
})

app.listen(8080,()=>console.log("preparado para hacer filtros"))