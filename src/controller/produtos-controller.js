const tatuagensController = (app) =>{
    app.get('/produtos', (req, res) => {
    res.send('GET para produtos')
  })

  app.post('/produtos', (req, res) => {
    res.send('Post para produtos')
  })
}