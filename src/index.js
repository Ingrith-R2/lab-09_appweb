const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/infogrupo',(req,res)=>{
    res.send("Landing page - Grupo #5")
})

app.get('/infointegrantes',(req,res)=>{
    res.json([
        { 
            "nombre":"Ingrith",
            "apellido":"Revelo"
            
        },

        { 
            "nombre":"ALan",
            "apellido":"Perez"
        },
        {
            "nombre":"Ariana ",
            "apellido":"Catani"
        }
    ])
})

app.get('/productos',(req,res)=>{
    res.send(`
            <h1>Catálogo de productos</h1>
                <p>Bienvenidos</p>
    `)
})



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});