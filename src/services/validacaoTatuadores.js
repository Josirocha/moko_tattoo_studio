const validaTatuador = (tatuador) => {
    const reNome = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    const reTelefone = /^\(\d{2}\)\d{5}-\d{4}$/g
    if (!reNome.test(tatuador.nome)) {
        throw new Error("Nome inválido! Preencha o nome corretamente")
    }
    if (!reTelefone.test(tatuador.telefone)) {
        throw new Error ("Número inválido! Preencha o telefone no formato (xx)xxxxx-xxxx incluindo parênteses e hífen")
    }
}

export default validaTatuador