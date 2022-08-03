  import express from 'express'
  import routes from './routes/index.js'

  const app = express()
  
  routes(app)
  
  export default app