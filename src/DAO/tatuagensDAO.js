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

    criarTatuagem : (categoria, link) => {
        const criaTattoo = `INSERT INTO TATUAGENS (CATEGORIA, LINK)
        VALUES (?, ?)`

        return new Promise((resolve, reject)=>{
            db.run(criaTattoo, [categoria, link], (error,row) => {
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }, 

    ajustaTatuagem: (id) => {
        const ajustaTattoo = `UPDATE TATUAGENS SET categoria = ?, link = ? WHERE id_tatuador = ?`
        return new Promise((resolve, reject)=>{
           db.run(ajustaTattoo, id, (error,row) => {
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