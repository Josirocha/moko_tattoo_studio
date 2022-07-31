import dao from "../DAO/produtosDAO.js";

const produtosController = {
  listarProdutos: async (req, res) => {
    try {
      const resposta = await dao.verProdutos();
      res.status(200).json(resposta);
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
};

export default produtosController;