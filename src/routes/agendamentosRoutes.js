import express from "express";
import agendamentosController from '../controller/agendamentos-controller.js'

const router = express.Router();

router
    .get("/agendamentos", agendamentosController.pegaAgendamento)
    .get("/agendamentos/:id", agendamentosController.pegaAgendamentoPorId)
    .post("/agendamentos", agendamentosController.criarAgendamento)
    .put("/agendamentos/:id", agendamentosController.atualizarAgendamento)
    .delete("/agendamentos/:id", agendamentosController.deletaAgendamento)


export default router;