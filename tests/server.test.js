import "@babel/polyfill";
import Environment from '../src/Environment';

const request = require('supertest'); // doesn't support es6

describe('Server API', () => {
  it('should properly route home on localhost', async () => {
    // Given & When
    const response = await request(Environment['LOCALHOST_URL']).get('/');

    // Then
    expect(response.status).toBe(200);
  });
});
