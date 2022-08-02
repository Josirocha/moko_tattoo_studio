import db from "../database/database.js"

const dao = {

    verTatuagens: () => {
        const pegaTattoo = ` SELECT * FROM TATUAGENS `
        return new Promise((resolve, reject)=>{
            db.all(pegaTattoo, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    verTatuagem: (id) => {
        const pegaTattoo = "SELECT * FROM TATUAGENS WHERE id = ?"
        return new Promise((resolve, reject)=>{
            db.get(pegaTattoo, id, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    criarTatuagem : (obj) => {
        const criaTattoo = `INSERT INTO TATUAGENS (CATEGORIA, LINK, ID_TATUADOR) VALUES (?, ?, ? )`

        return new Promise((resolve, reject)=>{
            db.run(criaTattoo,...Object.values(obj), (error,row) => {
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }, 

    ajustaTatuagem: (id, alteraImagem) => {
        const ajustaTattoo = `UPDATE TATUAGENS SET categoria = ?, link = ?, id_tatuador = ? WHERE id = ?`
        return new Promise((resolve, reject)=>{
           db.run(ajustaTattoo, ...Object.values(alteraImagem), id , (error,row) => {
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }, 

    deletarTatuagem : (id) => {
        const deletaTattoo = `DELETE FROM TATUAGENS WHERE id = ?`
        return new Promise((resolve, reject) => {
            db.run(deletaTattoo, id, (error, row) => {
                if(error)
                        reject(error)
                    else
                        resolve(row)
                })
        })
    }

}

export default dao