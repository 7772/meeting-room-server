import nock from 'nock';
const request = require('supertest');
// import request from 'supertest';
import "@babel/polyfill";

describe('Server API', () => {
  it('should properly route home', async () => {
    // Given & When
    const response = await request('http://localhost:3000').get('/');

    // Then
    expect(response.status).toBe(200);
  });
});
