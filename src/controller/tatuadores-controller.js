const tatuadoresController = (app) =>{
    app.get('/tatuadores', (req, res) => {
    res.send('Rota GET para tatuadores')
  })
}

export default tatuadoresController