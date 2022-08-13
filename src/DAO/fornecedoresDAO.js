import db from "../database/database.js"
const fornecedoresDAO = {
    pegaFornecedores:()=> {
        return new Promise((resolve,reject)=>{
            db.all('SELECT * FROM FORNECEDORES',(error,row)=>{
                if (error) {
                    reject({
                        mensagem: {
                            mensagem: error,
                            error: true,
                        },
                        status: 500,
                    });
                } else if (!row) {
                    reject({
                        mensagem: {
                            mensagem: "Banco de dados vazio",
                            error: true,
                        },
                        status: 404,
                    });
                } else {
                    resolve({
                        dados: {
                            resultado: row,
                        },
                        status: 200,
                        error: false,
                    });
                }
            });
        });
    },

    pegaFornecedoresId : (id) => {
        const query = `SELECT * FROM FORNECEDORES WHERE id = ?`
        return new Promise((resolve, reject) => {
            db.get(query, id, (error,row) => {
                if (error) {
                    reject({
                        mensagem: {
                            mensagem: error,
                            error: true,
                        },
                        status:500,
                    });
                } else if (!row) {
                    reject({
                        mensagem: {
                            mensagem: "Não encontrado",
                            error: true,
                        },
                        status: 404,
                    });
                } else {
                    resolve({
                        dados: {
                            resultado: row,
                        },
                        status: 200,
                        error: false,
                    });
                }
            });
        });
    },

    criarFornecedor : (obj) => {
        const query = `INSERT INTO FORNECEDORES (NOME, TELEFONE, ENDERECO, EMAIL)
        VALUES (?, ?, ?, ?)`

        return new Promise((resolve, reject) => {
            db.run(query, ...Object.values(obj), (error) => {
                if (error) {
                    reject({
                        mensagem: {
                            mensagem: error,
                            error: true,
                        },
                        status:500,
                    });
                } else {
                    resolve({
                        dados: {
                            mensagem: "Fornecedor inserido com sucesso!"
                        },
                        status: 200,
                        error: false,
                    });
                }
            });
        });
    },

    atualizarFornecedor : (id, fornecedor) => {
        const query = `UPDATE FORNECEDORES SET nome = ?, telefone = ?, endereco =?, email = ? WHERE id = ?`

        return new Promise((resolve, reject)=>{
            db.run(query, ...Object.values(fornecedor), id, (error) => {
                if (error) {
                    reject({
                        mensagem: {
                            mensagem: error,
                            error: true,
                        },
                        status:500,
                    });
                } else {
                    resolve({
                        dados: {
                            mensagem: "Fornecedores atualizado com sucesso!"
                        },
                        status: 200,
                        error: false,
                    });
                }
            });
        });
    },

    deletarFornecedor : (id) => {
        const query = `DELETE FROM FORNECEDORES WHERE id = ?`

        return new Promise((resolve, reject) => {
            db.run(query, id, (error) => {
                if (error) {
                    reject({
                        mensagem: {
                            mensagem: error,
                            error: true,
                        },
                        status:500,
                    });
                } else {
                    resolve({
                        dados: {
                            mensagem: "Fornecedor deletado"
                        },
                        status: 200,
                        error: false,
                    });
                }
            });
        });
    },
};



export default fornecedoresDAO