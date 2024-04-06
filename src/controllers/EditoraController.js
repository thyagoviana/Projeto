const Controller = require('./Controller.js');
const EditoraServices = require('../services/EditoraServices.js');

const editoraServices = new EditoraServices();

class EditoraController extends Controller {
  constructor() {
    super(editoraServices);
  }
}

module.exports = EditoraController;