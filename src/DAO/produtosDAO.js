import db from "../database/database.js"

const dao = {

    verProdutos: () => {
        const PEGA_PRODUTOS = `
        SELECT * FROM PRODUTOS
        `
        return new Promise((resolve, reject) => {
            db.all(PEGA_PRODUTOS, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    verUmProduto: (id) => {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM PRODUTOS WHERE id = ?', id, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })

    },

    criarProdutos: (descricao, quantidade, valor, tipo, id_fornecedor) => {
        const CRIA_PRODUTOS = `INSERT INTO PRODUTOS (DESCRICAO, QUANTIDADE, VALOR, TIPO, ID_FORNECEDOR)
        VALUES (?, ?, ?, ?, ?)`

        return new Promise((resolve, reject) => {
            db.run(CRIA_PRODUTOS, ...Object.values(descricao, quantidade,valor, tipo, id_fornecedor), (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    atualizarProduto : (id, novo) => {
        const query = `UPDATE PRODUTOS SET descricao = ?, quantidade = ?, valor = ?, tipo = ?, id_fornecedor = ? WHERE id = ?`

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

    deletarProduto : (id) => {
        const query = `DELETE FROM PRODUTOS WHERE id = ?`

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