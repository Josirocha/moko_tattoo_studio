import express from "express";
import clienteController from '../controller/clientes-controller.js'

const router = express.Router();

router
    .get("/clientes", clienteController.listarClientes)
    .get("/clientes/:id", clienteController.listarCliente)
    .post("/clientes", clienteController.cadastrarCliente)
    .put("/clientes/:id", clienteController.atualizarCliente)
    .delete("/clientes/:id", clienteController.deletarCliente)


export default router;