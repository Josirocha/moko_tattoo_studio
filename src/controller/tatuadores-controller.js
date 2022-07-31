import tatuadoresDAO from "../DAO/tatuadoresDAO";
import tatuadoresModel from "../model/tatuadores-model";

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
  }

}
export default tatuadoresController