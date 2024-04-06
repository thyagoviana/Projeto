const {Router} = require('express');
const EditoraController = require('../controllers/EditoraController.js');

const editoraController = new EditoraController();

const routes = Router();

routes.get('/editoras',(req,res) => editoraController.getAll(req,res)),
routes.get('/editoras/:id',(req,res) => editoraController.getPorID(req,res));
routes.post('/editoras',(req,res) => editoraController.cria(req,res));
routes.put('/editoras/:id',(req,res) => editoraController.atualiza(req,res));
routes.delete('/editoras/:id',(req,res) => editoraController.deleta(req,res));

module.exports = routes;