import db from "../database/database.js"

const dao = {

    verProdutos : () => {
        const PEGA_PRODUTOS = `
        SELECT * FROM PRODUTOS
        `
        return new Promise((resolve, reject)=>{
            db.all(PEGA_PRODUTOS, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    criarProdutos : (descricao, quantidade, valor, tipo) => {
        const CRIA_PRODUTOS = `INSERT INTO PRODUTOS (DESCRICAO, QUANTIDADE, VALOR, TIPO)
        VALUES (?, ?, ?, ?)`

        return new Promise((resolve, reject)=>{
            db.run(CRIA_PRODUTOS, [descricao, quantidade, valor, tipo], (error,row) => {
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }
}

export default dao