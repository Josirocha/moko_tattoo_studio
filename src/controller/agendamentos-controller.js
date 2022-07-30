
const agendamentosController = (app) => {

    // CRIA UM AGENDAMENTO
    app.post('/agendamentos', async (req, res) => {
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
    })

    // ATUALIZA UM AGENDAMENTO
    app.put('/agendamentos/:id', async (req, res) => {
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
    })

    // DELETA UM AGENDAMENTO
    app.delete('/agendamentos/:id', async (req, res) => {
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
    })

    // PEGA TODOS OS AGENDAMENTOS 
    app.get('/agendamentos', async (req, res) => {
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
    })

    // PEGA UM AGENDAMENTO POR ID
    app.get('/agendamentos/:id', async (req, res) => {
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
    })
}

export default agendamentosController


