import * as validacaoAgendamento from "../services/validacao-agendamentos.js"
import agendamentosDAO from "../DAO/agendamentosDAO.js"

const agendamentoModel = {
    insereAgendamento: async (agendamento) => {
        try {
            validacaoAgendamento.validaAgendamento(agendamento)
            const mensagem = await agendamentosDAO.insereAgendamento(agendamento)
            return mensagem
        } catch (error) {
            throw error
        }
    },

    pegaAgendamentos: async () => {
        try {
            const dados = await agendamentosDAO.pegaTodosAgendamentos()
            if (!dados) throw new Error("agendamento não encontrado")
            return dados
        } catch (error) {
            throw error
        }
    },

    pegaAgendamentoPorId: async (id) => {
        try {
            validacaoAgendamento.validaId(id)
            const dados = await agendamentosDAO.pegaUmAgendamento(id)
            if (!dados) throw new Error("agendamento não encontrado")
            return dados
        } catch (error) {
            throw error
        }
    },
    deletaAgendamento: async (id) => {
        try {
            validacaoAgendamento.validaId(id)
            const dados = await agendamentosDAO.pegaUmAgendamento(id)
            validacaoAgendamento.validaSeTemConteudo(dados)
            const mensagem = await agendamentosDAO.deletaAgendamentos(id)
            return mensagem
        } catch (error) {
            throw error
        }
    },
    atualizaAgendamento: async (id, agendamento) => {
        try {
            validacaoAgendamento.validaId(id)
            validacaoAgendamento.validaAtualizaAgendamento(agendamento)

            const dados = await agendamentosDAO.pegaUmAgendamento(id)
            validacaoAgendamento.validaSeTemConteudo(dados)
            
            const mensagem = await agendamentosDAO.atualizaAgendamento(id, agendamento)
            return mensagem
        } catch (error) {
            throw error
        }
    }


}

export default agendamentoModel