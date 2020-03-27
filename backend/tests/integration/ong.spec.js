const request = require('supertest')
const app = require('../../src/app')

describe('ONG', () => {
    it('should be able to create a new ong', async() => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD6",
            email: "apad6@gmail.com",
            whatsapp: "7897968",
            city: "São Paulo",
            uf: "SP"
        })

        console.log(response.body)
    })
})