import ProdutosM from "../model/produtos.js";


const produtosController = {

  verProdutos: async (req, res) => {
    try {
      const produtos = await ProdutosM.getProdutos()
      res.status(200).json({ produtos: produtos });
    } catch (error) {
      res.status(400).json({"msg": error.message});
    }
  },

  verUmProduto: async (req, res) => {
    const id = req.params.id
    try {
      const produto = await ProdutosM.getUmProduto(id)
      res.status(200).json({produto : produto});
    } catch (error) {
      res.status(404).json({"msg": error.message});
    }
  },

  criarProduto: async (req, res) => {
    try {
      const dados = req.body
      const mensagem = await ProdutosM.criarProduto(dados)
      res.status(200).json({ msg: mensagem })

    } catch (error) {
      res.status(400).json( {"msg": error.message});
    }
  },

  atualizarProduto: async (req, res) => {
    try {
      const id = req.params.id
      const dados = req.body
      const mensagem = await ProdutosM.atualizaProduto(id, dados)
      res.status(200).json({ msg: mensagem })
      res.json()
    } catch (error) {
      res.status(404).json(
        {
          "msg": error.message,
        }
      )
    }
  },

  deletarProduto: async (req, res) => {
    try {
      const id = req.params.id
      const mensagem = await ProdutosM.deleteProduto(id)
      res.status(201).json({ msg: mensagem })
    } catch (error) {
      res.status(404).json(
        {
          "msg": error.message,
        }
      )
    }
  },
};

export default produtosController;