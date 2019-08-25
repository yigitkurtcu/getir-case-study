const request = require('supertest');
const app = require('../app');
const db = require('../db');

beforeAll(() => {
  db.connect();
});
afterAll(done => {
  db.disconnect(done);
});

describe('Test the invalid requests', () => {
  test('Invalid endpoint it should response 404', done => {
    request(app)
      .get('/invalidEndPoint')
      .then(response => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });

  test('Invalid params it should response 400', done => {
    request(app)
      .post('/findRecords')
      .send({ foo: 'bar' })
      .then(response => {
        expect(response.statusCode).toBe(400);
        done();
      });
  });

  test('Invalid params it should response 400 - 2', done => {
    request(app)
      .post('/findRecords')
      .send({
        startDate: 'bar',
        endDate: 0,
        minCount: '...',
        maxCount: ''
      })
      .then(response => {
        expect(response.statusCode).toBe(400);
        done();
      });
  });
});

describe('Test main endpoint', () => {
  test('It should response with Success', done => {
    request(app)
      .post('/findRecords')
      .send({
        startDate: '2016-01-26',
        endDate: '2018-02-02',
        minCount: 2700,
        maxCount: 3000
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.code).toBe(0);
        expect(response.body.msg).toBe('Success');
        done();
      });
  });
});
