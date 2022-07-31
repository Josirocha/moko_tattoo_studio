import dao from "../DAO/tatuagensDAO.js";

const tatuagensController = {
  imagensTatto: async (req, res) => {
    try {
      const resposta = await dao.verTatuagem();
      res.status(200).json(resposta);
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
};

export default tatuagensController;
