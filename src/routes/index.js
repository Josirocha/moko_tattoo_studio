import express from 'express';
import clientes from './clientesRoutes.js'
import agendamentos from './agendamentosRoutes.js'
import fornecedores from './fornecedores-routes.js'


const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: "Moko Tattoo Studio" })
  })

  app.use(
    express.json(),
    clientes,
    agendamentos,
    fornecedores
  )
}

export default routes