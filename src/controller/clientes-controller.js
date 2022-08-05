import dao from "../DAO/clientesDAO.js";
import clienteM from "../model/clientes-model.js"
import valida from '../services/validate.js'

const clienteController = {

  listarClientes: async (req, res) => {
    try {
      const resposta = await dao.listarClientes();
      res.status(200).json(resposta);
    } catch (e) {
      res.status(400).json({
        "msg" : e.message,
        "erro" : "true"
      });
    }
  },

  listarCliente: async (req, res) => {
    const id = req.params.id
    try {
      const resposta = await dao.listarCliente(id);
      res.status(resposta.status).json(resposta.retorno);
    } catch (e) {
      res.status(e.status).json({
        "msg" : e.message,
        "erro" : "true"
      });
    }
  },

  cadastrarCliente: async (req, res) => {
    const body = req.body;
    try {
      const criaUsuario = clienteM(...Object.values(body))
      valida.validaUser(...Object.values(criaUsuario))
      const newUser = await dao.cadastrarCliente(criaUsuario)
      res.status(201).json(newUser)
    } catch (e) {
      res.status(400).json({
        "msg" : e.message,
        "erro" : "true"
      })
    }
  },

  atualizarCliente: async (req, res) => {
    const body = req.body
    const id = req.params.id
    try {
      await dao.listarCliente(id)
      const criaUsuario = clienteM(...Object.values(body))
      valida.validaUser(...Object.values(criaUsuario))
      const newUser = await dao.atualizarCliente(id, criaUsuario)
      res.status(200).json(newUser)
    } catch (e) {
      res.status(e.status).json({
       "msg" : e.message,
       "erro" : "true"
      })
    }
  },

  deletarCliente : async (req, res) => {
    const id = req.params.id
    try {
      await dao.listarCliente(id)
      const result = await dao.deletarCliente(id)
      res.status(200).json(result)
    } catch (e) {
      res.status(e.status).json({
        "msg": e.message,
        "erro": true
      })
    }
  }
  
};

export default clienteController;
