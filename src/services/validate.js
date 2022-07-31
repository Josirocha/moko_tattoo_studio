
const validations = {

    validaUser : (nome, tel) => {
        if((nome.length < 10) || (tel.length < 8)) {
            console.log(nome, tel);
                throw new Error("Algum campo está incompleto")
            }
        }
}

export default validations