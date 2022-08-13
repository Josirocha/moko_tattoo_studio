import db from "../database/database.js";

const dao = {
    verTatuagens: () => {
        const pegaTattoo = "SELECT * FROM TATUAGENS";
        return new Promise((resolve, reject) => {
            db.all(pegaTattoo, (error, row) => {
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

    verTatuagem: (id) => {
        const pegaTattoo = `SELECT * FROM TATUAGENS WHERE id = ?`;
        return new Promise((resolve, reject) => {
            db.get(pegaTattoo, id, (error, row) => {
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
                            mensagem: "Tatuagem não encontrada",
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

    criarTatuagem: (obj) => {
        const criaTattoo = `INSERT INTO TATUAGENS (CATEGORIA, LINK, ID_TATUADOR) VALUES (?, ?, ? )`;

        return new Promise((resolve, reject) => {
            db.run(criaTattoo, ...Object.values(obj), (error) => {
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
                            mensagem: "Tatuagem inserida com sucesso!"
                        },
                        status: 200,
                        error: false,
                    });
                }
            });
        });
    },


    ajustaTatuagem: (id, alteraImagem) => {
        const ajustaTattoo = `UPDATE TATUAGENS SET categoria = ?, link = ?, id_tatuador = ? WHERE id = ?`;
        return new Promise((resolve, reject) => {
            db.run(ajustaTattoo, ...Object.values(alteraImagem), id, (error) => {
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
                            mensagem: "Tatuagem atualizada com sucesso!"
                        },
                        status: 200,
                        error: false,
                    });
                }
            });
        });
    },


    deletarTatuagem: (id) => {
        const deletaTattoo = `DELETE FROM TATUAGENS WHERE id = ?`;
        return new Promise((resolve, reject) => {
            db.run(deletaTattoo, id, (error) => {
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
                            mensagem: "Tatuagem deletada com sucesso!"
                        },
                        status: 200,
                        error: false,
                    });
                }
            });
        });
    },
};

export default dao;
