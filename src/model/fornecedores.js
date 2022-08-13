import fornecedoresDAO from "../DAO/fornecedoresDAO.js";

const fornecedoresModel = {
    fornecedoresModel: (obj) => {
        return {
            nome: obj.nome,
            telefone: obj.telefone,
            endereco: obj.endereco,
            email: obj.email
        }
    },

     pegaFornecedores: async () => {
        try {
            const dados = await fornecedoresDAO.pegaFornecedores();
            return dados
        } catch (error) {
            throw error
        }
    },

    pegaFornecedor: async (id) => {
        try {
            const dados = await fornecedoresDAO.pegaFornecedoresId(id);
            return dados
        } catch (error) {
            throw error
        }
    },

    criaFornecedores: async (obj) => {
        try {
            const criaFornecedor = fornecedoresModel.fornecedoresModel(obj);
            const mensagem = await fornecedoresDAO.criarFornecedor(criaFornecedor);
            return mensagem
        } catch (error) {
            throw error
        }
    },

    atualizaFornecedor: async (id, fornecedor) => {
        try {
            await fornecedoresDAO.pegaFornecedoresId(id);
            const mensagem = await fornecedoresDAO.atualizarFornecedor(id, fornecedor);
            return mensagem
        } catch (error) {
            throw error
        }
    },

    deletaFornecedor: async (id) => {
        try {
            const mensagem = await fornecedoresDAO.deletarFornecedor(id);
            return mensagem
        } catch (error) {
            throw error
        }
    },


};

export default fornecedoresModel;