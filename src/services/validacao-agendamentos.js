export const validaId = (id) => {
    if (isNaN(id)) {

        throw new Error("id inválido")
    }
}

export const validaAgendamento = (agendamento) => {
    if (
        !agendamento ||
        isNaN(agendamento.idCliente) ||
        isNaN(agendamento.idTatuador) ||
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
        (agendamento.idCliente && isNaN(agendamento.idCliente)) ||
        (agendamento.idTatuador && isNaN(agendamento.idTatuador)) ||
        (agendamento.idTatuador && typeof agendamento.data !== 'string') ||
        (agendamento.idTatuador && typeof agendamento.horario !== 'string')
    ) {
        throw new Error("dados inválidos")
    }
}

