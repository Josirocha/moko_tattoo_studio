import dao from "../DAO/clientesDAO.js";
import clienteM from "../model/clientes-model.js"
// import ClienteModel from '../model'

const clienteController = {
  listarClientes: async (req, res) => {
    try {
      const resposta = await dao.verClientes();
      res.status(200).json(resposta);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  criarCliente: async (req, res) => {
    const body = req.body;
    try {
      const criaUsuario = clienteM(body.nome, body.telefone)
      const newUser = await dao.criarCliente(criaUsuario)
      res.json({
        "msg": "Usuário inserido com sucesso",
        "usuario": newUser,
        "erro": false
      })
    } catch (e) {
      res.status(400).json(e.message)
    }
  }
};

export default clienteController;
