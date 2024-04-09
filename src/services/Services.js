const dataSource = require('../models');

class Services{
    constructor(nomeModelo){
        this.model = nomeModelo;
    }

    async getAll(){
        return dataSource[this.model].findAll();
    }

    async getPorId(id){
        return dataSource[this.model].findOne({where:{id}});
    }
    async criaNovo(dados){
        return dataSource[this.model].create(dados);
    }
    async atualiza(dadosAtualizados,id){
        const listaRegistrosAtualizados = await dataSource[this.model].update(
            dadosAtualizados,{where:{id}}
        );
        if(listaRegistrosAtualizados[0] === 0){
            return false;
        }
        return true;
    }
    async exclui(id){
        return dataSource[this.model].destroy({where:{id:id}});
    }
}

module.exports = Services;