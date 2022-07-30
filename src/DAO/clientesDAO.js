import db from "../database/database.js"

const dao = {

    verClientes : () => {
        const PEGA_CLIENTES = `
        SELECT * FROM CLIENTES
        `
        return new Promise((resolve, reject)=>{
            db.all(PEGA_CLIENTES, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }
}

export default dao