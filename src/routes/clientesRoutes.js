import express from "express";
import clienteController from '../controller/clientes-controller.js'

const router = express.Router();

router
    .get("/clientes", clienteController.listarClientes)
    // .get("/clientes/:id", clienteController.listarClientesId)
    .post("/clientes", clienteController.criarCliente)


export default router;