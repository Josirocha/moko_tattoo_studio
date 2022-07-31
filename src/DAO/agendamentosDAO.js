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
    }
}

export default agendamentosDAO