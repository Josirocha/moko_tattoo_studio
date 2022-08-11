import * as valida from '../services/validate.js'
import dao from "../DAO/clientesDAO.js";

const clientesM = {

    getClientes: async () => {
        try {
            const dados = await dao.listarClientes()
            if (!dados) throw new Error("Não foi possível encontrar os dados")
            return dados
        } catch (error) {
            throw error
        }
    },

    getClienteById: async (id) => {
        try {
            valida.validaId(id)
            const dados = await dao.listarCliente(id)
            if (!dados) throw new Error("Não foi possível encontrar o Cliente")
            return dados
        } catch (error) {
            throw error
        }
    },
    
    insereCliente: async (usuario) => {
        try {
            valida.validaUser(...Object.values(usuario))
            const response = await dao.cadastrarCliente(usuario)
            return response
        } catch (error) {
            throw error
        }
    },

    updateCliente: async (id, usuario) => {
        try {
            valida.validaId(id)            
            dao.listarCliente(id)
            valida.validaUser(...Object.values(usuario))
            const mensagem = await dao.atualizarCliente(id, usuario)
            return mensagem
        } catch (error) {
            throw error
        }
    },

    deleteCliente: async (id) => {
        try {
            await dao.listarCliente(id)
            const dados = await dao.deletarCliente(id)
            if (!dados) throw new Error("Não foi possível encontrar o Cliente")
            return dados
        } catch (error) {
            throw error
        }
    }


} 


export default clientesM