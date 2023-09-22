const request = require('request');
const expect = require('chai').expect;
const app = require('./api.js');


describe('API Integration Test', () => {
  const API = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    request.get(`${API}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
