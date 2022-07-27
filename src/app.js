  import express from 'express'
  import tatuagensController from './controller/tatuagens-controller.js'
  import fornecedoresController from './controller/fornecedores-controller.js'

 

  const app = express()
  
  app.use(express.json())
  
  tatuagensController(app)
  fornecedoresController(app)

  
  export default app