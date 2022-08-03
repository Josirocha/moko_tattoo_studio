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
    
    // test("Test POST com um mesmo usuário", async ()=>{
    //     const tamanho = await request(app).get('/clientes')
    //     const res = await request(app).post('/clientes/:id').send(tamanho.body.length)
    //     expect(res.status).toBe(400)
    // })

    // test("Test GET um usuario", async ()=>{
    //     const res = await request(app).get(`/clientes/${mock.id}`)
    //     console.log(res)
    //     expect(res.status).toBe(200)
    //     expect(res.body.clientes.id).toBe(mock.id)
    // })

    // test("Rota GET um usuario que não existe", async ()=>{
    //     const res = await request(app).get(`/clientes`)
    //     expect(resposta.status).toBe(404)
    // })

})