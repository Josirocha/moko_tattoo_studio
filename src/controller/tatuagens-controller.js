import dao from "../DAO/tatuagensDAO.js";
import tatuagens from "../model/tatuagens.js";
import validaCampo from "../services/validacaoTatto.js";

const tatuagensController = {
  imagensTattoo: async (req, res) => {
    try {
      const resposta = await dao.verTatuagens();
      res.status(200).json(resposta);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  imagemTattoo: async (req, res) => {
    const id = req.params.id;
    try {
      const resposta = await dao.verTatuagem(id);
      res.status(200).json(resposta);
    } catch (e) {
      res.status(404).json(e.message);
    }
  },

  guardarImagens: async (req, res) => {
    const body = req.body;
    try {
      const criaTattoo = tatuagens(body);
      validaCampo.valida(...Object.values(criaTattoo))
      const novo = await dao.criarTatuagem(criaTattoo);
      res.json({
        msg: `Imagem da categoria: ${body.categoria} do tatuador id: ${body.id_tatuador} foi inserida com sucesso`,
        tatuagem: novo,
        erro: false,
      });
    } catch (e) {
      res.status(201).json(e.message);
    }
  },

  alterarImagens: async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    try {
      const alteraImagem = tatuagens(body);
      validaCampo.valida(...Object.values(alteraImagem))
      const novo = await dao.ajustaTatuagem(id, alteraImagem);
      res.json({
        msg: `Imagem da ${body.categoria}, com id ${id} atualizada com sucesso`,
        tatuagem: novo,
        erro: false,
      });
    } catch (e) {
      res.json(e.message);
    }
  },

  deletarImagens: async (req, res) => {
    const id = req.params.id;
    try {
      await dao.deletarTatuagem(id);
      res.json({
        msg: `Imagem do id ${id} deletada com sucesso!`,
        erro: "false",
      });
    } catch (e) {
      res.json({
        msg: e.message,
        erro: true,
      });
    }
  },
};

export default tatuagensController;
