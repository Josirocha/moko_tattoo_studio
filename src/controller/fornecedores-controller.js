import dao from "../DAO/fornecedoresDAO.js"
import fornecedoresModel from "../model/fornecedores.js"

const fornecedoresController = {
    listarFornecedores: async (req, res) => {
        try {
            const resposta = await dao.pegaFornecedores();
            res.status(200).json(resposta);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    listarFornecedoresId: async (req, res) => {
        const id = req.params.id
        try {
            const resposta = await dao.pegaFornecedoresId(id);
            res.status(200).json(resposta);
        } catch (e) {
            res.status(404).json(e.message);
        }
    },

    criarFornecedores: async (req, res) => {
        const body = req.body;
        try {
            const insereFornecedor = fornecedoresModel(body.nome, body.telefone, body.endereco, body.email)

            const novoFornecedor = await dao.criarFornecedor(insereFornecedor)
            res.status(201).json({
                "msg": `Fornecedor ${body.nome} inserido com sucesso`,
                "Fornecedor": novoFornecedor
            })

        } catch (e) {
            res.status(404).json(e.message);
        }
    },

    atualizarFornecedor: async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const criaFornecedor = fornecedoresModel(body.nome, body.telefone, body.endereco, body.email)

            const novoFornecedor = await dao.atualizarFornecedor(id, criaFornecedor)
            res.json({
                "msg": `Fornecedor ${body.nome}, com id ${id}, atualizado com sucesso`,
                "Fornecedor": novoFornecedor
            })

        } catch (e) {
            res.json(e.message)
        }
    },

    deletarFornecedor: async (req, res) => {
        const id = req.params.id
        try {
            await dao.deletarFornecedor(id)
            res.json({
                "msg": `Fornecedor${id} deletado com sucesso!`
            })
        } catch (e) {
            res.json({
                "msg": e.message
            })
        }
    }

}


export default fornecedoresController

