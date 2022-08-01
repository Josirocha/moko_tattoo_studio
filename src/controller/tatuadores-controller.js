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
    try {
      const body = req.body
      const resposta = await tatuadoresDAO.criarTatuador(body)
      res.status(201).json(resposta)

    } catch (e) {
      res.status(404).json(e.message);
    }
  }

}
export default tatuadoresController