
const validations = {

    validaUser : (nome, tel) => {
        if(nome.length < 10) throw new Error("Seu nome deve ter ao menos 10 caracteres")
        if(tel.length < 8) throw new Error("Telefone inválido")
    }
}

export default validations