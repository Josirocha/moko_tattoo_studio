import agendamentoModel from "../model/agendamentos-model.js"

const agendamentosController = {

    // CRIA UM AGENDAMENTO
    criarAgendamento: async (req, res) => {
        try {
            // const todosAgendamentos = await agendamentoModel.pegaAgendamentos()
            //res.status(200).json(todosAgendamentos)
            res.json({
                "msg": "agendamento feito com sucesso"
            })
        } catch (error) {
            res.status(404).json(
                {
                    "msg": error.message,
                }
            )
        }
    },

    // ATUALIZA UM AGENDAMENTO
    atualizarAgendamento: async (req, res) => {
        try {
            // const todosAgendamentos = await agendamentoModel.pegaAgendamentos()
            //res.status(200).json(todosAgendamentos)
            res.json()
        } catch (error) {
            res.status(404).json(
                {
                    "msg": error.message,
                }
            )
        }
    },

    // DELETA UM AGENDAMENTO
    deletaAgendamento: async (req, res) => {
        try {
            const id = req.params.id
            const mensagem = await agendamentoModel.deletaAgendamento(id)
            res.status(201).send(mensagem)
        } catch (error) {
            res.status(404).json(
                {
                    "msg": error.message,
                }
            )
        }
    },

    // PEGA TODOS OS AGENDAMENTOS 
    pegaAgendamento: async (req, res) => {
        try {
            const todosAgendamentos = await agendamentoModel.pegaAgendamentos()
            res.status(200).json(todosAgendamentos)
        } catch (error) {
            res.status(404).json(
                {
                    "msg": error.message,
                }
            )
        }
    },

    // PEGA UM AGENDAMENTO POR ID
    pegaAgendamentoPorId: async (req, res) => {
        try {
            const id = req.params.id
            const agendamento = await agendamentoModel.pegaAgendamentoPorId(id)
            res.status(200).json(agendamento)
        } catch (error) {
            res.status(404).json(
                {
                    "msg": error.message,
                }
            )
        }
    }
}

export default agendamentosController


