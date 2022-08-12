export const validaId = (id) => {
    if (isNaN(id)) {

        throw new Error("id inválido")
    }
}

export const validaProduto = (produto) => {
    if (
        !produto ||
        produto.descricao.length === 0 ||
        produto.quantidade.length === 0 ||
        produto.valor.length === 0 ||
        produto.tipo.length === 0 ||
        produto.id_fornecedor.length === 0 ||
        typeof produto.descricao !== 'string' ||
        typeof produto.quantidade !== 'number' ||
        typeof produto.valor !== 'number' ||
        typeof produto.tipo !== 'string' ||
        isNaN(produto.id_fornecedor) 
    ) {
        throw new Error("dados inválidos")
    } 
}

export const validaAtualizaProduto = (produto) => {
    if (
        !produto ||
        !Object.values(produto).length ||
        produto.descricao.length === 0 ||
        produto.quantidade.length === 0 ||
        produto.valor.length === 0 ||
        produto.tipo.length === 0 ||
        (produto.descricao && typeof produto.descricao !== 'string') ||
        (produto.quantidade && typeof produto.quantidade !== 'number') ||
        (produto.valor && typeof produto.valor !== 'number') ||
        (produto.tipo && typeof produto.tipo !== 'string') ||
        (produto.id_fornecedor && isNaN(produto.id_fornecedor))
        ) {
        throw new Error("dados inválidos")
    }
}
