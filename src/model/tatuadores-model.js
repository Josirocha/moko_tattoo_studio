import tatuadoresDAO from "../DAO/tatuadoresDAO.js"
import { validaTatuador, validaId, validaSeTemConteudo } from "../services/validacaoTatuadores.js"

const tatuadoresModel = {

    listarTatuadores: async () => {
        try {
            const dados = await tatuadoresDAO.listarTatuadores()
            if (!dados) throw new Error ("Não possível encontrar os dados")
            return dados 
        } catch (error) {
            throw error
        }
    },

    listarTatuador: async (id) => {
        try {
            const dados = await tatuadoresDAO.listarTatuador(id)
            validaSeTemConteudo(dados)
            return dados 
        } catch (error) {
            throw error
        } 
    },

    criarTatuador: async (tatuador) => {
        try {
            validaTatuador(tatuador)
            const resposta = await tatuadoresDAO.criarTatuador(tatuador)
            return resposta
        } catch (error) {
            throw error
        }
    },

    atualizarTatuador: async (id, tatuador) => {
        try {
            validaId(id)
            validaTatuador(tatuador)
            const dados = await tatuadoresDAO.listarTatuador(id)
            validaSeTemConteudo(dados)
            const resposta = await tatuadoresDAO.atualizarTatuador(id, tatuador)
            return resposta
        } catch (error) {
            throw error
        }
    },

    deletarTatuador: async (id) => {
        try {
            validaId(id)
            const dados = await tatuadoresDAO.listarTatuador(id)
            validaSeTemConteudo(dados)
            const resposta = await tatuadoresDAO.deletarTatuador(id)
            return resposta
        } catch (error) {
            throw error
        }
    }

}

export default tatuadoresModel