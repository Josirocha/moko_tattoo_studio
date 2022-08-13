import fornecedoresModel from "../model/fornecedores.js"

const fornecedoresController = {
    listarFornecedores: async (req, res) => {
        try {
            const resposta = await fornecedoresModel.pegaFornecedores();
            res.status(resposta.status).json(resposta.dados);
        } catch (error) {
            res.status(error.status).json(error.mensagem);
        }
    },

    listarFornecedoresId: async (req, res) => {

        const id = req.params.id
        try {
            const resposta = await fornecedoresModel.pegaFornecedor(id);
            res.status(resposta.status).json(resposta.dados);
        } catch (error) {
            res.status(error.status).json(error.mensagem);
        }
    },

    criarFornecedores: async (req, res) => {
        const body = req.body;
        try {
            const resposta = await fornecedoresModel.criaFornecedores(body)
            res.status(resposta.status).json(resposta.dados);
        } catch (error) {
            res.status(error.status).json(error.mensagem);
        }
    },

    atualizarFornecedor: async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const resposta = await fornecedoresModel.atualizaFornecedor(id, body)
            res.status(resposta.status).json(resposta.dados);
        } catch (error) {
            res.status(error.status).json(error.mensagem);
        }
    },


    deletarFornecedor: async (req, res) => {
        const id = req.params.id
        try {
            const resposta = await fornecedoresModel.deletaFornecedor(id)
            res.status(resposta.status).json(resposta.dados);
        } catch (error) {
            res.status(error.status).json(error.mensagem);
        }
    },
};

export default fornecedoresController

