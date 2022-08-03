const validaCampo = {
    valida: (categoria, link, id_tatuador)=> {
        if((categoria.length == 0) || (link.length == 0) || (id_tatuador.length == 0)) {
            console.log(categoria, link, id_tatuador);
            throw new Error("Preencha todos os campos")
            }
        }
}
export default validaCampo