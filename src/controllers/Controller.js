class Controller {
    constructor(entidadeService) {
      this.entidadeService = entidadeService;
    }
  
    async getAll(req, res) {
      try {
        const listaDeRegistro = await this.entidadeService.getAll();
        return res.status(200).json(listaDeRegistro);
      } catch (erro) {
        // erro
      }
    }
  
    async getPorId(req, res) {
      const { id } = req.params;
      try {
        const umRegistro = await this.entidadeService.getPorId(Number(id));
        return res.status(200).json(umRegistro);
      } catch (erro) {
        // erro
      }
    }
  
    async criaNovo(req, res) {
      const dadosParaCriacao = req.body;
      try {
        const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
        return res.status(200).json(novoRegistroCriado);
      } catch (erro) {
        // erro
      }
    }
  
    async atualiza(req, res) {
      const { id } = req.params;
      const dadosAtualizados = req.body;
      try {
        const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
        if (!foiAtualizado) {
          return res.status(400).json({ mensagem: 'registro não foi atualizado' });
        }
        return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
      } catch (erro) {
        // erro
      }
    }
  
    async exclui(req, res) {
      const { id } = req.params;
      try {
        await this.entidadeService.excluiRegistro(Number(id));
        return res.status(200).json({ mensagem: `id ${id} deletado` });
      } catch (error) {
        // erro
      }
    }
  }
  
  module.exports = Controller;