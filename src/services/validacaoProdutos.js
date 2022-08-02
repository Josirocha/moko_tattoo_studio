export const validaCampo = (descricao, quantidade, valor, tipo, id_fornecedor)=>{
    if((descricao.length === 0) || (quantidade.length === 0)|| (valor.length === 0) || (tipo.length === 0) || (id_fornecedor.length === 0)) {
        console.log(descricao, quantidade, valor, tipo, id_fornecedor);
            throw new Error("Preencha todos os campos")
    }
}