import db from "../database/database.js"
const fornecedoresDAO = {
    pegaFornecedores:()=> {
        return new Promise((resolve,reject)=>{
            db.all('SELECT * FROM FORNECEDORES',(erro,linhas)=>{
                if(erro){
                    reject(erro)
                    
                }else{
                    resolve(linhas)
                }
            })
        })
    },
    pegaFornecedoresId : (id) => {
        const query = `SELECT * FROM FORNECEDORES WHERE id = ?`
        return new Promise((resolve, reject) => {
            db.get(query, id, (error,row) => {
                if(error) {
                    reject(error)
                } else if ((!row) || row.length <= 0) {
                    reject({
                        "message": 'Fornecedor não encontrado',
                        "erro": true
                    })
                } else {resolve(row)}
            })
        })
    },

    criarFornecedor : (usuario) => {
        const query = `INSERT INTO FORNECEDORES (NOME, TELEFONE, ENDERECO, EMAIL)
        VALUES (?, ?, ?, ?)`

        return new Promise((resolve, reject) => {
            db.run(query, ...Object.values(usuario), (error,row) => {
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    atualizarFornecedor : (id, novo) => {
        const query = `UPDATE FORNECEDORES SET nome = ?, telefone = ?, endereco =?, email = ? WHERE id = ?`

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

    deletarFornecedor : (id) => {
        const query = `DELETE FROM FORNECEDORES WHERE id = ?`

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



export default fornecedoresDAO