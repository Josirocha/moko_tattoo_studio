import validaCampo from "../services/validacaoTatto.js";
import tatuagensDAO from "../DAO/tatuagensDAO.js";

const tatuagensModel = {
    tatuagensModel: (obj) => {
        return {
            categoria: obj.categoria,
            link: obj.link,
            id_tatuador: obj.id_tatuador
        }
    },

     pegaImagens: async () => {
        try {
            const dados = await tatuagensDAO.verTatuagens();
            return dados
        } catch (error) {
            throw error
        }
    },

    pegaImagem: async (id) => {
        try {
            const dados = await tatuagensDAO.verTatuagem(id);
            return dados
        } catch (error) {
            throw error
        }
    },

    insereImagem: async (obj) => {
        try {
            const criaTattoo = tatuagensModel.tatuagensModel(obj);
            validaCampo.valida(...Object.values(criaTattoo));
            const mensagem = await tatuagensDAO.criarTatuagem(criaTattoo);
            return mensagem
        } catch (error) {
            throw error
        }
    },

    atualizaImagem: async (id, alteraImagem) => {
        try {
            await tatuagensDAO.verTatuagem(id);
            validaCampo.valida(...Object.values(alteraImagem));
            const mensagem = await tatuagensDAO.ajustaTatuagem(id, alteraImagem);
            return mensagem
        } catch (error) {
            throw error
        }
    },

    deletaImagem: async (id) => {
        try {
            const mensagem = await tatuagensDAO.deletarTatuagem(id);
            return mensagem
        } catch (error) {
            throw error
        }
    },


};

export default tatuagensModel;
