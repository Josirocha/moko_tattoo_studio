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
                } 
                else if ((!row) || row.length <= 0) {
                    reject({
                        "message": 'Produto não encontrado',
                        "erro": true
                    })
                } else {resolve(row)}
            })
        })

    },

    criarProdutos: (produto) => {
        const CRIA_PRODUTOS = `INSERT INTO PRODUTOS (DESCRICAO, QUANTIDADE, VALOR, TIPO, ID_FORNECEDOR)
        VALUES (?, ?, ?, ?, ?)`

        return new Promise((resolve, reject) => {
            db.run(CRIA_PRODUTOS, produto.descricao, produto.quantidade, produto.valor, produto.tipo, produto.id_fornecedor, (error) => {
                if (error)
                    reject(error)
                else
                    resolve(`Produto inserido com sucesso`)
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
                        resolve(`Produto atualizado com sucesso`)
                }
            )
        })  
    },

    deletarProduto : (id) => {
        const query = `DELETE FROM PRODUTOS WHERE id = ?`

        return new Promise((resolve, reject) => {
            db.run(query, id, (error) => {
                if(error)
                        reject(error)
                    else
                        resolve(`Produto com id ${id} deletado com sucesso`)
                })
        })
    }
}

export default dao