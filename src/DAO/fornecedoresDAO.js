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
    }
}

export default fornecedoresDAO