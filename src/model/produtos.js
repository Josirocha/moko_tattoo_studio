const produtosModel = {

    insereProduto: async (produtos) => {
        return await dao.insereProduto(produtos)
    },

    pegaProdutos: async (produtos) => {
        return await dao.pegaTodosProdutos()
    },

    pegaUmProdutoId: async (produtos) => {
        return await dao.pegaProdutoId(id)
    },

    deletaProduto: async (produtos) => {
        return await dao.deletaProduto(id)
    },

    atualizaProduto: async (id, novosDados) => {
        const produtoAtual = await produtosModel.pegaUmProdutoId(id)
        console.log(produtoAtual)
        if (produtoAtual) {
            const produtoAtualizado = {
                "valor": novosDados.valor || produtoAtual.valor,
                "tipo": novosDados.tipo || produtoAtual.tipo,
                "descricao": novosDados.descricao || produtoAtual.descricao,
                "quantidade": novosDados.quantidade || produtoAtual.quantidade
            }
            return await dao.atualizaProduto(id, produtoAtualizado)
        } else {
            throw new Error("Produto não encontrado")
        }
    },

}