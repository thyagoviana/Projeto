const Services = require('./Services.js');
const dataSource = require('../models');
const {Editora,Autor} = require('../models');

class LivroServices extends Services{
    constructor(){
        super('Livro');
    }
}

module.exports = LivroServices;