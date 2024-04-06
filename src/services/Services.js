const dataSource = require('../models');

class Services{
    constructor(nomeModelo){
        this.model = nomeModelo;
    }
    async getTodosRegistros(){
        return dataSource[this.model].findAll();
    }
    async getRegistroPorID(id){
        return dataSource[this.model].findOne({where:{id}});
    }
    async criarRegistro(dados){
        return dataSource[this.model].create(dados);
    }
    async atualizarRegistro(dadosAtualizados,id){
        const listaRegistrosAtualizados = await dataSource[this.model].update(
            dadosAtualizados,{where:{id}}
        );
        if(listaRegistrosAtualizados[0] === 0){
            return false;
        }
        return true;
    }
    async deletarRegistro(id){
        return dataSource[this.model].destroy({where:{id:id}});
    }
}

module.exports = Services;