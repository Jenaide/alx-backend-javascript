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

  it('should return correct response with valid :id', (done) => {
    request.get(`${API}/cart/13`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 13');
      done();
    });
  });

  it('should return a 404 response for negative :id values', (done) => {
    request.get(`${API}/cart/-13`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('should return a 404 response for a non-numeral value', (done) => {
    request.get(`${API}/cart/h100-62a3-65d1-36e1`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
