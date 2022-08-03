const request = require('supertest');

const server = 'http://localhost:3000';
const assert = require('assert');

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  });
  describe(' GET /posts', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => request(server)
        .get('/posts')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200));

      it('posts from api are send back', () => request(server)
        .get('/posts')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          assert(response.body.data[0].id, 1);
        })
        .catch((err) => console.log(err)));
    });
  });
});
