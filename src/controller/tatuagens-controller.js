import tatuagensModel from "../model/tatuagens.js";

const tatuagensController = {
  imagensTattoo: async (req, res) => {
    try {
      const resposta = await tatuagensModel.pegaImagens();
      res.status(resposta.status).json(resposta.dados);
    } catch (error) {
      res.status(error.status).json(error.mensagem);
    }
  },

  imagemTattoo: async (req, res) => {
    const id = req.params.id;
    try {
      const resposta = await tatuagensModel.pegaImagem(id);
      res.status(resposta.status).json(resposta.dados);
    } catch (error) {
      res.status(error.status).json(error.mensagem);
    }
  },

  guardarImagens: async (req, res) => {
    const body = req.body;
    try {
      const resposta = await tatuagensModel.insereImagem(body);
      res.status(resposta.status).json(resposta.dados);
    } catch (error) {
      res.status(error.status).json(error.mensagem);
    }
  },

  alterarImagens: async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    try {
      const resposta = await tatuagensModel.atualizaImagem(id, body);
      res.status(resposta.status).json(resposta.dados);
    } catch (error) {
      res.status(error.status).json(error.mensagem);
    }
  },

  deletarImagens: async (req, res) => {
    const id = req.params.id;
    try {
      const resposta = await tatuagensModel.deletaImagem(id);
      res.status(resposta.status).json(resposta.dados);
    } catch (error) {
      res.status(error.status).json(error.mensagem);
    }
  },
};

export default tatuagensController;
