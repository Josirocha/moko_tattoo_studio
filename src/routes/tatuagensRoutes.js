import express from "express";
import tatuagensController from '../controller/tatuagens-controller.js'

const router = express.Router();

router
    .get("/tatuagens", tatuagensController.imagensTatto)
    .get("tatuagens/:categoria", )
    .post("tatuagens/")
    .put("tatuagens/")
    .delete("tatuagens/")


export default router;