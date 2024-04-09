const {Router} = require('express');
const AutorController = require('../controllers/AutorController.js');

const autorController = new AutorController();

const routes = Router();

routes.get('/autores',(req,res) => autorController.getAll(req,res)),
routes.get('/autores/:id',(req,res) => autorController.getPorId(req,res));
routes.post('/autores',(req,res) => autorController.criaNovo(req,res));
routes.put('/autores/:id',(req,res) => autorController.atualiza(req,res));
routes.delete('/autores/:id',(req,res) => autorController.exclui(req,res));

module.exports = routes;