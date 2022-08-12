export const validaId = (id) => {
    if (isNaN(id)) {

        throw new Error("id inválido")
    }
}

export const validaAgendamento = (agendamento) => {
    if (
        !agendamento ||
        isNaN(agendamento.id_cliente) ||
        isNaN(agendamento.id_tatuador) ||
        typeof agendamento.data !== 'string' ||
        typeof agendamento.horario !== 'string'
    ) {
        throw new Error("dados inválidos")
    }
}

export const validaAtualizaAgendamento = (agendamento) => {
    if (
        !agendamento ||
        !Object.values(agendamento).length ||
        (agendamento.id_cliente && isNaN(agendamento.id_cliente)) ||
        (agendamento.id_tatuador && isNaN(agendamento.id_tatuador)) ||
        (agendamento.data && typeof agendamento.data !== 'string') ||
        (agendamento.horario && typeof agendamento.horario !== 'string')
    ) {
        throw new Error("dados inválidos")
    }
}
export const validaSeTemConteudo = (dados) => {
    if (!dados) throw new Error("agendamento não encontrado")
}
