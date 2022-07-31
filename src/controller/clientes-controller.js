import dao from "../DAO/clientesDAO.js";
// import ClienteModel from '../model'

const Clientecontroller = {
  listarClientes: async (req, res) => {
    try {
      const resposta = await dao.verClientes();
      res.status(200).json(resposta);
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
};

export default Clientecontroller;
