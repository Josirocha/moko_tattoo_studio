  import express from 'express'
  import tatuagensController from './controller/tatuagens-controller.js'
 

  const app = express()
  
  app.use(express.json())
  
  tatuagensController(app)

  
  export default app