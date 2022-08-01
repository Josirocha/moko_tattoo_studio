import express from "express";
import tatuadoresController from "../controller/tatuadores-controller.js";

const router = express.Router();

router
    .get('/tatuadores', tatuadoresController.listarTatuadores)
    .get('/tatuadores/:id', tatuadoresController.listarTatuador)
    .post('/tatuadores', tatuadoresController.criarTatuador)
    .put('/tatuadores/:id', tatuadoresController.atualizarTatuador)
    .delete('/tatuadores/:id', tatuadoresController.deletarTatuador)


export default router;