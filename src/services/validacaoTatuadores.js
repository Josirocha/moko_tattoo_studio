export const validaTatuador = (tatuador) => {
    
    if (!tatuador.nome || !tatuador.telefone) {
        throw new Error("Algum campo está vazio. Preencha todos os campos!")
    }
}

export const validaId = (id) => {
    if (isNaN(id)) {
        throw new Error ("Id inválido")
    }
}

export const validaSeTemConteudo = (dados) => {
    if (!dados) throw new Error("Id não encontrado no banco dados")
}