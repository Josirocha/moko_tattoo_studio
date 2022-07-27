const fornecedoresController = (app) => {
    app.get('/fornecedores', (req, res) => {
        res.send('rota get funcionando')
    })
}
export default fornecedoresController
