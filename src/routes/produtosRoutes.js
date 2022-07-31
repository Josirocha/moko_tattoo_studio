import express from "express";
import produtosController from '../controller/produtos-controller.js'

const router = express.Router();

router
    .get("/produtos", produtosController.listarProdutos)
    .get("produtos/:descricao", )


export default router;