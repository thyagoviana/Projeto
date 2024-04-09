const {Router} = require('express');
const LivroController = require('../controllers/LivroController.js');

const livroController = new LivroController();

const routes = Router();

routes.get('/livros',(req,res) => livroController.getAll(req,res)),
routes.get('/livros/:id',(req,res) => livroController.getPorId(req,res));
routes.post('/livros',(req,res) => livroController.criaNovo(req,res));
routes.put('/livros/:id',(req,res) => livroController.atualiza(req,res));
routes.delete('/livros/:id',(req,res) => livroController.exclui(req,res));

module.exports = routes;