import express from "express";
import produtosController from '../controller/produtos-controller.js'

const router = express.Router();

router
    .get("/produtos", produtosController.verProdutos)
    .get("/produtos/:id", produtosController.verUmProduto)
    .post("/produtos", produtosController.criarProduto)
    .put("/produtos/:id", produtosController.atualizarProduto)
    .delete("/produtos/:id", produtosController.deletarProduto)

export default router;