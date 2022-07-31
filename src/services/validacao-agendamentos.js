export const validaId = (id) => {
    if (isNaN(id)) {

        throw new Error("id inválido")
    }
}

