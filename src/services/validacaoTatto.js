const validacao = {
    valida: (categoria, link, id_tatuador) => {
        if ((categoria.length == 0) || (link.length == 0) || (id_tatuador.length == 0)) {
            throw {
                mensagem: {
                    mensagem: "Preencha todos os campos",
                    error: true,
                },
                status: 400,
            }
        }

    },
}
export default validacao