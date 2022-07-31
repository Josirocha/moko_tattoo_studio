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
                        "erro": true
                    })
                } else {resolve(row)}
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

    criarCliente : (usuario) => {
        const query = `INSERT INTO CLIENTES (NOME, TELEFONE)
        VALUES (?, ?)`

        return new Promise((resolve, reject) => {
            db.run(query, ...Object.values(usuario), (error,row) => {
                if(error)
                    reject(error)
                else
                    resolve(row)
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
                        resolve(novo)
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
                        resolve(row)
                })
        })
    }

}


export default dao