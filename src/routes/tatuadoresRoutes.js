import express from "express";
import tatuadoresController from "../controller/tatuadores-controller.js";

const router = express.Router();

router
    .get('/tatuadores', tatuadoresController.listarTatuadores)
    .get('/tatuador:id', tatuadoresController.listarTatuador)


export default router;