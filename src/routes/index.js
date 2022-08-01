import express from 'express';
import clientes from './clientesRoutes.js'
import agendamentos from './agendamentosRoutes.js'
import tatuagens from './tatuagensRoutes.js'
import produtos from './produtosRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: "Moko Tattoo Studio" })
  })

  app.use(
    express.json(),
    clientes,
    agendamentos, 
    tatuagens,
    produtos
  )
}

export default routes
