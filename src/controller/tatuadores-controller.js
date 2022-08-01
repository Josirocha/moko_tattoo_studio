import tatuadoresDAO from "../DAO/tatuadoresDAO.js";
import tatuadoresModel from "../model/tatuadores-model.js";

const tatuadoresController = {
  listarTatuadores: async (req, res) => {
    try {
      const resposta = await tatuadoresDAO.listarTatuadores();
      res.status(200).json(resposta);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  listarTatuador: async (req, res) => {
    const id = req.params.id
    try {
      const resposta = await tatuadoresDAO.listarTatuador(id);
      res.status(200).json(resposta);
    } catch (e) {
      res.status(404).json(e.message);
    }
  },

  criarTatuador: async (req, res) => {
    const body = req.body;
    try {
      const insereTatuador = tatuadoresModel(body.nome, body.telefone)
      // colocar a validação aqui
      const novoTatuador = await tatuadoresDAO.criarTatuador(insereTatuador)
      res.status(201).json({
        "msg": `Pessoa tatuadora ${body.nome} inserida com sucesso`,
        "Pessoa tatuadora": novoTatuador
      })

    } catch (e) {
      res.status(404).json(e.message);
    }
  },

  atualizarTatuador: async (req, res) => {
    const body = req.body
    const id = req.params.id
    try {
      const criaTatuador = tatuadoresModel(body.nome, body.telefone)
      // valida.validaUser(...Object.values(criaUsuario))
      const novoTatuador = await tatuadoresDAO.atualizarTatuador(id, criaTatuador)
      res.json({
        "msg": `Pessoa tatuadora ${body.nome}, com id ${id}, atualizada com sucesso`,
        "Pessoa tatuadora": novoTatuador
      })

    } catch (e) {
      res.json(e.message)
    }
  },

}
export default tatuadoresController