import dao from "../DAO/produtosDAO.js";
import ProdutosM from "../model/produtos.js";

const produtosController = {

  verProdutos: async (req, res) => {
    try {
      const resposta = await dao.verProdutos();
      res.status(200).json(resposta);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  verUmProduto: async (req, res) => {
    const id = req.params.id
    try {
      const resposta = await dao.verUmProduto(id);
      res.status(200).json(resposta);
    } catch (e) {
      res.status(404).json(e.message);
    }
  },

  criarProduto: async (req, res) => {
    const body = req.body;
    try {
      const criaProduto = ProdutosM(body.descricao, body.quantidade, body.valor, body.tipo, body.id_fornecedor);
      const novoProduto = await dao.criarProdutos(criaProduto);
      res.json({
        msg: `${body.descricao} inserido com sucesso`,
        Produto: novoProduto,
        erro: false,
      });
    } catch (e) {
      res.status(201).json(e.message);
    }
  },

  atualizarProduto: async (req, res) => {
    const body = req.body
    const id = req.params.id
    try {
      const criarProduto = ProdutosM(body.descricao, body.quantidade, body.valor, body.tipo, body.id_fornecedor)
      const novoProduto = await dao.atualizarProduto(id, criarProduto)
      res.json({
        "msg": `${body.descricao}, com id ${id} atualizado com sucesso`,
        "produto": novoProduto,
        "erro": false
      })
    } catch (e) {
      res.json(e.message)
    }
  },

  deletarProduto: async (req, res) => {
    const id = req.params.id;
    try {
      await dao.deletarProduto(id);
      res.json({
        msg: `Produto ${id} deletado com sucesso!`,
        erro: "false"
      });
    } catch (e) {
      res.json({
        msg: e.message,
        erro: true
      });
    }
  }



};

export default produtosController;