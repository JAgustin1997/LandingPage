const express = require('express');
const app = express();
const port = 3000;
const path= require('path');

app.use(express.static(__dirname));

app.get('/index', (req,res) => {
    console.log("Bienvenido");
    res.sendFile(path.join(__dirname,'index.html'));

});

app.listen(port, ()=>{
    console.log (`Servidor escuchando en el puerto: ${port}`);

});

