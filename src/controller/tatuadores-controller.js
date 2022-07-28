const tatuadores = (app) =>{
    app.get('/tatuadores', (req, res) => {
    res.send('Rota GET para tatuadores')
  })
}