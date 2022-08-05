const validaCampo = {
    valida: (categoria, link, id_tatuador)=> {
        if((categoria.length == 0) || (link.length == 0) || (id_tatuador.length == 0))
            throw new Error("teste")
        
    }
}
export default validaCampo