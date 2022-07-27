import tatuagens from "./model/tatuagens.js"

const tatuagensController = (app) =>{
    app.get('/tatuagens', (req, res) => {
    res.send('Rota GET para tatuagens')
  })

  app.post('/tatuagens', (req, res) => {
    res.send('Rota post para tatuagens')
  })
}
  export default tatuagensController