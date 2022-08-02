
import express from "express";
import fornecedoresController from '../controller/fornecedores-controller.js'

const router = express.Router();

router
    .get("/fornecedores", fornecedoresController.listarFornecedores)
    .get("/fornecedores/:id", fornecedoresController.listarFornecedoresId)
    .post("/fornecedores", fornecedoresController.criarFornecedores)
    .put("/fornecedores/:id", fornecedoresController.atualizarFornecedor)
    .delete("/fornecedores/:id", fornecedoresController.deletarFornecedor)


export default router;