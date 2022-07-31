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
            db.get('SELECT * FROM AGENDAMENTOS WHERE idAgenda = ?', id,
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
            db.run(`DELETE FROM AGENDAMENTOS WHERE idAgenda = ?`, id,
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
        console.log('dados', agendamento);
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO AGENDAMENTOS (DATA, HORARIO,IDCLIENTE,IDTATUADOR)
            VALUES (?, ?, ?, ?)`, agendamento.data, agendamento.horario, agendamento.idCliente, agendamento.idTatuador,
                (erro) => {
                    if (erro) {
                        reject(erro)
                    } else {
                        resolve("Agendamento inserido com sucesso")
                    }
                })
        })
    },

    atualizaAgendamento: (id, agendamento) => {

        const query = []
        const novoDado = []

        if (agendamento.idCliente) {
            query.push(' idCliente = ? ')
            novoDado.push(agendamento.idCliente)
        }
        if (agendamento.data) {
            query.push(' data = ? ')
            novoDado.push(agendamento.data)

        }
        if (agendamento.horario) {
            query.push(' horario = ? ')
            novoDado.push(agendamento.horario)
        }
        if (agendamento.idTatuador) {
            query.push(' idTatuador = ? ')
            novoDado.push(agendamento.idTatuador)
        }

        return new Promise((resolve, reject) => {
            db.run(`UPDATE agendamentos SET ${query.join(',')} WHERE idAgenda = ? `, ...novoDado, id,
                (erro) => {
                    if (erro) {
                        reject(erro)
                    } else {
                        resolve("Agendamento atualizado com sucesso")
                    }
                })
        })
    }
}


export default agendamentosDAO