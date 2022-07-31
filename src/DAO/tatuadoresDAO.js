import db from "../database/database.js"

const tatuadoresDAO = {
    listarTatuadores : (id) => {
        const query = "SELECT * FROM TATUADORES WHERE id = ?"
        return new Promise((resolve, reject) => {
            db.get(query, id, (error,row) => {
                if(error) {
                    reject(error)
                } else if ((!row) || row.length <= 0) {
                    reject({
                        "message": 'Tatuador não encontrado',
                        "erro": true
                    })
                } else {resolve(row)}
            })
        })
    }
}

export default tatuadoresDAO