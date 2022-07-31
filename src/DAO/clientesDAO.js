import db from "../database/database.js"

const dao = {

    verClientes : () => {
        const PEGA_CLIENTES = `
        SELECT * FROM CLIENTES
        `
        return new Promise((resolve, reject)=>{
            db.all(PEGA_CLIENTES, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    criarCliente : (nome, telefone) => {
        const CRIA_CLIENTE = `INSERT INTO CLIENTES (NOME, TELEFONE)
        VALUES (?, ?)`

        return new Promise((resolve, reject)=>{
            db.run(CRIA_CLIENTE, [nome, telefone], (error,row) => {
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }
}

export default dao