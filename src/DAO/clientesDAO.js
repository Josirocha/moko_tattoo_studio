import db from "../database/database.js"

const dao = {

    listarCliente : (id) => {
        const query = "SELECT * FROM CLIENTES WHERE id = ?"
        return new Promise((resolve, reject) => {
            db.get(query, id, (error,row) => {
                if(error) {
                    reject(error)
                } else if ((!row) || row.length <= 0) {
                    reject({
                        "message": 'Usuário não encontrado',
                        "status": 404,
                        "erro": true
                    })
                } else {resolve({
                    "status": 200,
                    "retorno" : {
                    "dados" : row
                    }
                })}
            })
        })
    },

    listarClientes : () => {
        const query = `SELECT * FROM CLIENTES`
        return new Promise((resolve, reject) => {
            db.all(query, (error,row) => {
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    cadastrarCliente : (usuario) => {
        const query = `INSERT INTO CLIENTES (NOME, TELEFONE)
        VALUES (?, ?)`

        return new Promise((resolve, reject) => {
            db.run(query, ...Object.values(usuario), (error,row) => {
                if(error)
                    reject(error)
                else
                    resolve({
                        "msg": `Usuário ${usuario.nome} inserido com sucesso`,
                        "erro": false
                      })
            })
        })
    },

    atualizarCliente : (id, novo) => {
        const query = `UPDATE CLIENTES SET nome = ?, telefone = ? WHERE id = ?`

        return new Promise((resolve, reject)=>{
            db.run(query, ...Object.values(novo), id, (error) => {
                    if(error)
                        reject(error)
                    else
                        resolve({
                            "msg": `Usuário ${novo.nome}, com id ${id} atualizado com sucesso`,
                            "erro": false
                          })
                }
            )
        })  
    },

    deletarCliente : (id) => {
        const query = `DELETE FROM CLIENTES WHERE id = ?`

        return new Promise((resolve, reject) => {
            db.run(query, id, (error, row) => {
                if(error)
                        reject(error)
                    else
                        resolve({
                            "msg": `Usuário ${id} deletado com sucesso!`,
                            "erro": "false"
                          })
                })
        })
    }

}


export default dao