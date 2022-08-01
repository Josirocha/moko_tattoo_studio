import express from "express";
import tatuagensController from '../controller/tatuagens-controller.js'

const router = express.Router();

router
    .get("/tatuagens", tatuagensController.imagensTattoo)
    .get("/tatuagens/:id", tatuagensController.imagemTattoo)
    .post("/tatuagens", tatuagensController.guardarImagens)
    .put("/tatuagens/:id", tatuagensController.alterarImagens)
    .delete("/tatuagens/:id", tatuagensController.deletarImagens)


export default router;