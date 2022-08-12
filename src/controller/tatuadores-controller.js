import tatuadoresModel from "../model/tatuadores-model.js";

const tatuadoresController = {

  listarTatuadores: async (req, res) => {
    try {
      const resposta = await tatuadoresModel.listarTatuadores()
      res.status(200).json({"Pessoas tatuadoras": resposta});
    } catch (e) {
      res.status(500).json({
        "mensagem": e.message,
        "erro": true
      });
    }
  },

  listarTatuador: async (req, res) => {
    try {
      const id = req.params.id
      const resposta = await tatuadoresModel.listarTatuador(id)
      res.status(200).json(resposta);
    } catch (e) {
      res.status(404).json({
        "mensagem": e.message,
        "erro": true
      })
    }
  },

  criarTatuador: async (req, res) => {
    try {
      const body = req.body;
      const resposta = await tatuadoresModel.criarTatuador(body)
      res.status(201).json({
        "mensagem": resposta
      })

    } catch (e) {
      res.status(400).json({
        "mensagem": e.message,
        "erro": true
      })
    }
  },

  atualizarTatuador: async (req, res) => {
    try {
      const body = req.body
      const id = req.params.id
      const resposta = await tatuadoresModel.atualizarTatuador(id, body)
      res.status(200).json({"mensagem": resposta})
    } catch (e) {
      res.status(404).json({
        "mensagem": e.message,
        "erro": true
      })
    }
  },

  deletarTatuador: async (req, res) => {
    try {
      const id = req.params.id
      const resposta = await tatuadoresModel.deletarTatuador(id)
      res.status(200).json({"mensagem": resposta})
    } catch (e) {
      res.status(400).json({
        "msg": e.message,
        "erro": true
      })
    }
  }

}
export default tatuadoresController