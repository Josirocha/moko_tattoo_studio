
import express from "express";
import fornecedoresController from '../controller/fornecedores-controller.js'

const router = express.Router();

router
    .get("/fornecedores", fornecedoresController.pegaFornecedores)
    // .get("produtos/:descricao", )


export default router;