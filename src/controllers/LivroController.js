const Controller = require('./Controller.js');
const LivroServices = require('../services/LivroServices.js');

const livroServices = new LivroServices();

class LivroController extends Controller {
  constructor() {
    super(livroServices);
  }

  async getAll(req, res) {
    try {
      const listaDeLivros = await this.entidadeService.getAll();
      return res.status(200).json(listaDeLivros);
    } catch (erro) {
      res.status(500).json({mensagem: erro.message});
    }
  }
}

module.exports = LivroController;