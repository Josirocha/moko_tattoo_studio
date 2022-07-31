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

