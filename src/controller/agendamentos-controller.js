import agendamentoModel from "../model/agendamentos-model.js"

const agendamentosController = {

    criarAgendamento: async (req, res) => {
        try {
            const dados = req.body
            const mensagem = await agendamentoModel.insereAgendamento(dados)
            res.status(200).json({msg: mensagem})

        } catch (error) {
            res.status(400).json(
                {
                    "msg": error.message,
                }
            )
        }
    },

    atualizarAgendamento: async (req, res) => {
        try {
            const id = req.params.id
            const dados = req.body
            const mensagem = await agendamentoModel.atualizaAgendamento(id, dados)
            res.status(200).json({msg: mensagem})
            res.json()
        } catch (error) {
            res.status(404).json(
                {
                    "msg": error.message,
                }
            )
        }
    },


    deletaAgendamento: async (req, res) => {
        try {
            const id = req.params.id
            const mensagem = await agendamentoModel.deletaAgendamento(id)
            res.status(201).json({msg: mensagem})
        } catch (error) {
            res.status(404).json(
                {
                    "msg": error.message,
                }
            )
        }
    },

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


