import dao from "../DAO/clientesDAO.js";
import clienteM from "../model/clientes-model.js"
import valida from '../services/validate.js'

const clienteController = {

  listarClientes: async (req, res) => {
    try {
      const resposta = await dao.listarClientes();
      res.status(200).json(resposta);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  listarCliente: async (req, res) => {
    const id = req.params.id
    try {
      const resposta = await dao.listarCliente(id);
      res.status(200).json(resposta);
    } catch (e) {
      res.status(404).json(e.message);
    }
  },

  criarCliente: async (req, res) => {
    const body = req.body;
    try {
      const criaUsuario = clienteM(body.nome, body.telefone)
      valida.validaUser(...Object.values(criaUsuario))
      const newUser = await dao.criarCliente(criaUsuario)
      res.json({
        "msg": `Usuário ${body.nome} inserido com sucesso`,
        "usuario": newUser,
        "erro": false
      })
    } catch (e) {
      res.status(201).json(e.message)
    }
  },

  atualizarCliente: async (req, res) => {
    const body = req.body
    const id = req.params.id
    try {
      const criaUsuario = clienteM(body.nome, body.telefone)
      valida.validaUser(...Object.values(criaUsuario))
      const newUser = await dao.atualizarCliente(id, criaUsuario)
      res.json({
        "msg": `Usuário ${body.nome}, com id ${id} atualizado com sucesso`,
        "usuario": newUser,
        "erro": false
      })
    } catch (e) {
      res.json(e.message)
    }
  },

  deletarCliente : async (req, res) => {
    const id = req.params.id
    try {
      await dao.deletarCliente(id)
      res.json({
        "msg": `Usuário ${id} deletado com sucesso!`,
        "erro": "false"
      })
    } catch (e) {
      res.json({
        "msg": e.message,
        "erro": true
      })
    }
  }
  
};

export default clienteController;
