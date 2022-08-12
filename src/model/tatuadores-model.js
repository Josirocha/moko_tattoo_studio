import tatuadoresDAO from "../DAO/tatuadoresDAO.js"
import { validaNome } from "../services/validacaoTatuadores.js"

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
            if (!dados) throw new Error ("Pessoa tatuadora não encontrada")
            return dados 
        } catch (error) {
            throw error
        } 
    },

}

export default tatuadoresModel