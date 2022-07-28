  import express from 'express'
  import tatuagensController from './controller/tatuagens-controller.js'
  import fornecedoresController from './controller/fornecedores-controller.js'
  import tatuadoresController from './controller/tatuadores-controller.js'
 

  const app = express()
  
  app.use(express.json())
  
  tatuagensController(app)
  fornecedoresController(app)
  tatuadoresController(app)
  
  export default app