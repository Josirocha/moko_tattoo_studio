import request from 'supertest'
import app from '../src/app.js'

const mock = {
    "nome" : "testando aplicacao",
    "telefone" : "1234567890"
}

describe('Rotas de Usuário', () => {

    test('Test do GET', async () => {
        const res = await request(app).get('/clientes')
        expect(res.status).toBe(200)
        
    })

    test('Test do Post', async () => {
        const res = await request(app).post('/clientes').send(mock)
        expect(res.status).toBe(201)
    })
    

})