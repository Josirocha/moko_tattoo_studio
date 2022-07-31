import express from "express";
import tatuadoresController from "../controller/tatuadores-controller";

const router = express.Router();

router
    .get('/', tatuadoresController.listarTatuadores)