import express from 'express';
import cors from 'cors';
import clientes from './clientesRoutes.js'
import agendamentos from './agendamentosRoutes.js'
import fornecedores from './fornecedores-routes.js'
import tatuagens from './tatuagensRoutes.js'
import produtos from './produtosRoutes.js'
import tatuadores from './tatuadoresRoutes.js';


const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: "Moko Tattoo Studio" })
  })

  app.use(
    express.json(),
    cors(),
    clientes,
    agendamentos,
    fornecedores,
    tatuadores,
    tatuagens,
    produtos
  )
}

export default routes
