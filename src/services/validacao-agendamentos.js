export const validaId = (id) => {
    console.log(id,"chegou");
    if (isNaN(id)) {

        throw new Error("id inválido")
    }
}

