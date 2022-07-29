// import tatuagensModel from "../model/tatuagens.js"

const tatuagensController = (app) => {

  app.get('/tatuagens', (req, res) => {
    const pegaImg = tatuagensModel.pegaImagem()
    res.json(
      {
        "id": pegaImg,
        "erro": false
      }

    )
  })

  app.post('/tatuagens', (req, res) => {
    const body = req.body
    try {
      const novaImg = tatuagensModel(body.id, body.url, body.categoria, body.tatuadores, body.clientes)

      tatuagensModel.insereImagem(novaImg)
      res.json(
        {
          "msg": "Imagem inserida",
          "usuario": novaImg,
          "erro": false
        }
      )

    } catch (error) {
      res.json(
        {
          "msg": error.message,
          "erro": true
        }
      )
    }

  })
}

export default tatuagensController