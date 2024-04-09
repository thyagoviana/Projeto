const express = require('express');
const routes = require('./routes');

const app = express();

routes(app);

app.get('/',(req,res) =>{
    res.status(200).json({message:'Servidor Express com SQL usando Sequelize'});
});

module.exports = app;