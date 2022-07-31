import db from "../database/database.js"

const dao = {

    verTatuagem : () => {
        const PEGA_TATUAGENS = `
        SELECT * FROM TATUAGENS
        `
        return new Promise((resolve, reject)=>{
            db.all(PEGA_TATUAGENS, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    criarTatuagem : (categoria, link) => {
        const CRIA_TATUAGEM = `INSERT INTO TATUAGENS (CATEGORIA, LINK)
        VALUES (?, ?)`

        return new Promise((resolve, reject)=>{
            db.run(CRIA_TATUAGEM, [categoria, link], (error,row) => {
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }
}

export default dao