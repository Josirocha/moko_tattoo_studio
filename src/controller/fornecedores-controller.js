import dao from "../DAO/fornecedoresDAO.js"
import fornecedoresModel from "../model/fornecedores.js"

const fornecedoresController ={

    criarFornecedores:(req,res) =>{
        
        

    },


    atualizarFornecedores:(req,res)=>{

    },

    deletaForcenedores:(req,res)=>{

    },

    pegaFornecedores: async (req,res)=>{
        try{
            const todosFornecedores = await dao.pegaFornecedores()
            res.status(200).json(todosFornecedores)
        }catch(e){
            res.status(404).json(e.message)
        }
    },

    pegaFornecedoresId:(req,res)=>{
        
    }
}  

export default fornecedoresController

