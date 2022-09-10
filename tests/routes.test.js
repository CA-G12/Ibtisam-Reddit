const supertest = require('supertest');
const router = require('../server/app');

describe('Testing Routes for several Pages', () => {
    test('Testing Status code for Home Page', (done) => {
        supertest(router)
        .get('/homePage')
        .expect(200)
        .end((err, res) => {
            if (err) done(err);
            expect(res.statusCode).toBe(200);
            done();
        })
    })
    test('Testing Status code for User Profile Page', (done) => {
        supertest(router)
        .get('/userProfile')
        .expect(200)
        .end((err, res) => {
            if (err) done(err);
            expect(res.statusCode).toBe(200);
            done();
        })
    })

    test('Testing Status code for Logging Out', (done) => {
        supertest(router)
        .get('/logOut')
        .expect(302)
        .end((err, res) => {
            if (err) done(err);
            expect(res.statusCode).toBe(302);
            done();
        })
    })

    test('Testing Status code for Signing up', (done) => {
        supertest(router)
        .get('/')
        .expect(200)
        .end((err, res) => {
            if (err) done(err);
            expect(res.statusCode).toBe(200);
            done();
        })
    })
})