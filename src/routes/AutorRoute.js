const {Router} = require('express');
const AutorController = require('../controllers/AutorController.js');

const autorController = new AutorController();

const routes = Router();

routes.get('/autores',(req,res) => autorController.getAll(req,res)),
routes.get('/autores/:id',(req,res) => autorController.getPorID(req,res));
routes.post('/autores',(req,res) => autorController.cria(req,res));
routes.put('/autores/:id',(req,res) => autorController.atualiza(req,res));
routes.delete('/autores/:id',(req,res) => autorController.deleta(req,res));

module.exports = routes;