
import express from "express";
import fornecedoresController from '../controller/fornecedores-controller.js'

const router = express.Router();

router
    .get("/fornecedores", fornecedoresController.pegaFornecedores)
    .get("/fornecedores/:id", fornecedoresController.pegaFornecedoresId)
    .post("/fornecedores", fornecedoresController.criarFornecedores)
    .put("/fornecedores/:id", fornecedoresController.atualizarFornecedores)
    .delete("/fornecedores/:id", fornecedoresController.deletaForcenedores)


export default router;