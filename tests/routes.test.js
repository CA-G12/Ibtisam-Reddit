const supertest = require('supertest');
const router = require('../server/app');

describe('Testing Routes for several Pages', () => {
    test('Testing Status code for index Page', (done) => {
        supertest(router)
        .get('/homePage')
        .expect(200)
        .end((err, res) => {
            if (err) done(err);
            expect(res.statusCode).toBe(200);
            done();
        })
    })
})