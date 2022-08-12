import * as valida from '../services/validacaoProdutos.js'
import dao from "../DAO/produtosDAO.js";

const ProdutosM = {

    getProdutos: async () => {
        try {
            const dados = await dao.verProdutos()
            if (!dados) throw new Error("Não foi possível encontrar os dados")
            return dados
        } catch (error) {
            throw error
        }
    },

    getUmProduto: async (id) => {
        try {
            valida.validaId(id)
            const dados = await dao.verUmProduto(id)
            if (!dados) throw new Error("Não foi possível encontrar o produto")
            return dados
        } catch (error) {
            throw error
        }
    },
    
    criarProduto: async (produto) => {
        try {
            valida.validaProduto(produto)
            const response = await dao.criarProdutos(produto)
            return response
        } catch (error) {
            throw error
        }
    },

    atualizaProduto: async (id, produto) => {
        try {
            valida.validaId(id)            
            valida.validaAtualizaProduto(produto)
            const mensagem = await dao.atualizarProduto(id, produto)
            return mensagem
        } catch (error) {
            throw error
        }
    },

    deleteProduto: async (id) => {
        try {
            await dao.verUmProduto(id)
            const dados = await dao.deletarProduto(id)
            if (!dados) throw new Error("Não foi possível encontrar o Produto")
            return dados
        } catch (error) {
            throw error
        }
    }


} 


export default ProdutosM