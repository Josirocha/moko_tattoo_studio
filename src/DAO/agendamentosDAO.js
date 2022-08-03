import db from "../database/database.js"

const agendamentosDAO = {
    pegaTodosAgendamentos: () => {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM  AGENDAMENTOS', (erro, linhas) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(linhas)
                }
            })
        })

    },


    pegaUmAgendamento: (id) => {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM AGENDAMENTOS WHERE id = ?', id,
                (erro, dado) => {
                    if (erro) {
                        reject(erro)
                    } else {
                        resolve(dado)
                    }
                })
        })

    },
    deletaAgendamentos: (id) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM AGENDAMENTOS WHERE id = ?`, id,
                (erro) => {
                    if (erro) {
                        reject(erro)
                    } else {
                        resolve(`Agendamento com id ${id} deletado com sucesso`)
                    }
                })
        })
    },

    insereAgendamento: (agendamento) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO AGENDAMENTOS (DATA, HORARIO,ID_CLIENTE,ID_TATUADOR)
            VALUES (?, ?, ?, ?)`, agendamento.data, agendamento.horario, agendamento.id_cliente, agendamento.id_tatuador,
                (erro) => {
                    if (erro) {
                        reject(erro)
                    } else {
                        resolve(`Agendamento  inserido com sucesso`)
                    }
                })
        })
    },

    atualizaAgendamento: (id, agendamento) => {

        const query = []
        const novoDado = []

        if (agendamento.id_cliente) {
            query.push(' id_cliente = ? ')
            novoDado.push(agendamento.id_cliente)
        }
        if (agendamento.data) {
            query.push(' data = ? ')
            novoDado.push(agendamento.data)

        }
        if (agendamento.horario) {
            query.push(' horario = ? ')
            novoDado.push(agendamento.horario)
        }
        if (agendamento.id_Tatuador) {
            query.push(' id_Tatuador = ? ')
            novoDado.push(agendamento.id_tatuador)
        }

        return new Promise((resolve, reject) => {
            db.run(`UPDATE agendamentos SET ${query.join(',')} WHERE id = ? `, ...novoDado, id,
                (erro) => {
                    if (erro) {
                        reject(erro)
                    } else {
                        resolve(`Agendamento com id ${id} atualizado com sucesso`)
                    }
                })
        })
    }
}


export default agendamentosDAO