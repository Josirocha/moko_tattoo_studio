import db from "../database/database.js"

const tatuadoresDAO = {

    listarTatuadores : () => {
        const query = `SELECT * FROM TATUADORES`
        return new Promise((resolve, reject) => {
            db.all(query, (error,row) => {
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    listarTatuador : (id) => {
        const query = `SELECT * FROM TATUADORES WHERE id = ?`
        return new Promise((resolve, reject) => {
            db.get(query, id, (error,row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    criarTatuador : (usuario) => {
        const query = `INSERT INTO TATUADORES (NOME, TELEFONE)
        VALUES (?, ?)`
        return new Promise((resolve, reject) => {
            db.run(query, ...Object.values(usuario), (error) => {
                if(error){
                    reject(error)
                } else {
                    resolve("Pessoa tatuadora inserida com sucesso!")
                }
            })
        })
    },

    atualizarTatuador : (id, novo) => {
        const query = `UPDATE TATUADORES SET nome = ?, telefone = ? WHERE id = ?`
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

    deletarTatuador : (id) => {
        const query = `DELETE FROM TATUADORES WHERE id = ?`

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

export default tatuadoresDAO